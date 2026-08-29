class VideoLightbox {
  constructor(selector = ".video-lightbox") {
    this.videos = document.querySelectorAll(selector);
    this.lightbox = null;
    this.videoContainer = null;
    this.init();
  }

  init() {
    if (!this.videos.length) return;
    this.createLightbox();
    this.bindEvents();
  }

  createLightbox() {
    this.lightbox = document.createElement("div");
    this.lightbox.className =
      "fixed inset-0 z-[9999] hidden items-center justify-center bg-black/90 p-4";

    this.lightbox.innerHTML = `
            <div class="relative w-full max-w-5xl">
                <!-- Close Button -->
                <button type="button" class="video-lightbox-close absolute -right-2 -top-12 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20" aria-label="Close video">
                    &times;
                </button>
                <!-- Video Container -->
                <div class="video-lightbox-content aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl"></div>
            </div>
        `;

    document.body.appendChild(this.lightbox);
    this.videoContainer = this.lightbox.querySelector(
      ".video-lightbox-content",
    );
  }

  bindEvents() {
    // Video click
    this.videos.forEach((video) => {
      video.addEventListener("click", (event) => {
        event.preventDefault();
        const url = video.getAttribute("href");
        this.open(url);
      });
    });

    // Close button
    const closeButton = this.lightbox.querySelector(".video-lightbox-close");
    closeButton.addEventListener("click", () => {
      this.close();
    });

    // Click outside
    this.lightbox.addEventListener("click", (event) => {
      if (event.target === this.lightbox) {
        this.close();
      }
    });

    // ESC key
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        !this.lightbox.classList.contains("hidden")
      ) {
        this.close();
      }
    });
  }

  open(url) {
    const videoId = this.getYouTubeVideoId(url);
    if (!videoId) {
      console.error("Invalid YouTube URL:", url);
      return;
    }

    // Added autoplay=1 so the video starts immediately inside the lightbox
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    const iframe = document.createElement("iframe");
    iframe.className = "h-full w-full";
    iframe.src = embedUrl;
    iframe.title = "YouTube video";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    );
    iframe.setAttribute("allowfullscreen", "");

    this.videoContainer.innerHTML = "";
    this.videoContainer.appendChild(iframe);

    this.lightbox.classList.remove("hidden");
    this.lightbox.classList.add("flex");
    document.body.classList.add("overflow-hidden");
  }

  close() {
    this.videoContainer.innerHTML = ""; // Stops the video/audio
    this.lightbox.classList.remove("flex");
    this.lightbox.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  getYouTubeVideoId(url) {
    try {
      const parsedUrl = new URL(url);
      if (
        parsedUrl.hostname === "www.youtube.com" ||
        parsedUrl.hostname === "youtube.com"
      ) {
        return parsedUrl.searchParams.get("v");
      }
      if (parsedUrl.hostname === "youtu.be") {
        return parsedUrl.pathname.split("/").filter(Boolean)[0];
      }
      return null;
    } catch (error) {
      console.error("Invalid YouTube URL:", error);
      return null;
    }
  }
}

// Auto Initialize
document.addEventListener("DOMContentLoaded", () => {
  new VideoLightbox();
});

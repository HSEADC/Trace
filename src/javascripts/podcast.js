import startIcon from "../img/podcast/A-button-start.png";
import pauseIcon from "../img/podcast/A-button-pause.png";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "00:00:00";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return [hours, minutes, secs].map((unit) => String(unit).padStart(2, "0")).join(":");
}

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("podcast-audio");
  const progress = document.getElementById("podcast-progress");
  const currentTime = document.getElementById("podcast-current-time");
  const duration = document.getElementById("podcast-duration");
  const toggleIcon = document.getElementById("podcast-toggle-icon");
  const body = document.querySelector(".body_podcast");

  if (!audio || !progress || !currentTime || !duration || !toggleIcon || !body) return;

  function updateProgress() {
    const value = audio.currentTime || 0;
    const total = audio.duration || 0;
    const percent = total ? (value / total) * 100 : 0;

    progress.value = value;
    progress.max = total;
    progress.style.setProperty("--podcast-progress", `${percent}%`);
    currentTime.textContent = formatTime(value);
  }

  function setPlayingState(isPlaying) {
    body.classList.toggle("is-podcast-playing", isPlaying);
    toggleIcon.src = isPlaying ? pauseIcon : startIcon;
    toggleIcon.parentElement.setAttribute("aria-label", isPlaying ? "Пауза" : "Воспроизвести");
  }

  document.querySelectorAll("[data-podcast-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const { podcastAction } = button.dataset;

      if (podcastAction === "toggle") {
        if (audio.paused) {
          try { await audio.play(); } catch (error) { setPlayingState(false); }
        } else { audio.pause(); }
      }
      if (podcastAction === "restart") audio.currentTime = 0;
      if (podcastAction === "backward") audio.currentTime = Math.max(0, audio.currentTime - 10);
      if (podcastAction === "forward") audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
      if (podcastAction === "end" && Number.isFinite(audio.duration)) audio.currentTime = audio.duration;
    });
  });

  progress.addEventListener("input", () => { audio.currentTime = Number(progress.value); });
  audio.addEventListener("loadedmetadata", () => { duration.textContent = formatTime(audio.duration); updateProgress(); });
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("play", () => setPlayingState(true));
  audio.addEventListener("pause", () => setPlayingState(false));
  audio.addEventListener("ended", () => { audio.currentTime = 0; setPlayingState(false); updateProgress(); });
  updateProgress();
});

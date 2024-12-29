document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".preferences__title");
  const words = title.textContent.split(" ");

  title.innerHTML = words
    .map((word, index) => `<span style="animation-delay:${index * 0.3}s">${word}</span> `)
    .join(" ");

  const subtitle = document.querySelector(".subtitle");
  subtitle.style.animationDelay = `${words.length * 0.3}s`;
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
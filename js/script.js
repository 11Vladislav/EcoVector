const mainTitle = "Розробимо та узгодимо еколого-технічну документацію";
const titleElement = document.getElementById('main-title');

    let i = 0;
function typeWriter() {

  if (i < mainTitle.length) {
    titleElement.textContent += mainTitle.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter();

});


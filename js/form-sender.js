document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  // let isValid = true;

  // Имя: только буквы
  if (!/^[a-zA-Zа-яА-Я\s]+$/.test(name)) {
    // isValid = false;
    Notiflix.Notify.failure("Ім'я може містити тільки літери.")
    return;
  //   document.getElementById("nameError").textContent = "Ім'я може містити тільки літери.";
  // } else {
  //   document.getElementById("nameError").textContent = "";
  }

  // Телефон: только цифры
  if (!/^\d{10,}$/.test(phone)) {
    // isValid = false;
    Notiflix.Notify.failure("Телефон повинен містити не менше 10 цифр.")
    return;
  //   document.getElementById("phoneError").textContent = "Телефон повинен містити не менше 10 цифр.";
  // } else {
  //   document.getElementById("phoneError").textContent = "";
  }

  // Email: проверка формата
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    // isValid = false;
    Notiflix.Notify.failure("Введіть корректний email!");
    return;
  }  
  //   document.getElementById("emailError").textContent = "Введіть корректний email.";
  // } else {
  //   document.getElementById("emailError").textContent = "";
  // }

  // Сообщение: не пустое
  if (message.length < 1) {
    // isValid = false;
    Notiflix.Notify.failure("Повідомлення не може бути порожнім.");
    return;
  //   document.getElementById("messageError").textContent = "Повідомлення не може бути порожнім.";
  // } else {
  //   document.getElementById("messageError").textContent = "";
  }

  // if (!isValid) return;

  // Отправка данных через Web3Forms
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "2ad14e2f-a367-49d0-905d-1268b191e6e9",
        name,
        phone,
        email,
        message,
      }),
    });

    if (response.ok) {
      Notiflix.Notify.success("Повідомлення успішно відправлено!");
      document.getElementById("contactForm").reset();
    } else {
      Notiflix.Notify.failure("Помилка відправки. Спробуйте пізніше.");
    }
  } catch (error) {
    Notiflix.Notify.failure("Помилка мережі. Спробуйте пізніше.");
  }
});
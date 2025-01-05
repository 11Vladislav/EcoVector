// Переключение языка
const langTexts = {
  ua: {
    // main: "Главная",
    // food: "Еда",
    // alcohol: "Алкоголь",
    // nonAlcoholic: "Безалкогольные напитки",
    // contacts: "Контакты",
    // welcome: "Добро пожаловать в бар Синий Кот!",
    // menuHighlights: "Новинки меню:",
    // highlightFish: "Рыба в кляре",
    // highlightCocktail: "Коктейль 'Молотова'",
    // highlightIceCream: "Мороженое с сыром",
  },
  en: {
    // main: "Home",
    // food: "Food",
    // alcohol: "Alcohol",
    // nonAlcoholic: "Non-alcoholic Drinks",
    // contacts: "Contacts",
    // welcome: "Welcome to the Blue Cat Bar!",
    // menuHighlights: "Menu Highlights:",
    // highlightFish: "Battered Fish",
    // highlightCocktail: "Molotov Cocktail",
    // highlightIceCream: "Cheese Ice Cream",
  },
};

const languageSwitch = document.getElementById("languageSwitch");
const textElements = document.querySelectorAll("[data-lang]");

languageSwitch.addEventListener("change", () => {
  const lang = languageSwitch.checked ? "en" : "ua";
  textElements.forEach((el) => {
    el.textContent = langTexts[lang][el.getAttribute("data-lang")];
  });
});
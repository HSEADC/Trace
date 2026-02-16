// function setActiveNavItem(clickedItem) {
//   // 1. Находим ВСЕ элементы навигации
//   const navItems = document.querySelectorAll(".nav-link");

//   // 2. Убираем класс 'active' у ВСЕХ элементов
//   navItems.forEach((item) => {
//     item.classList.remove("active");
//   });

//   // 3. Добавляем класс 'active' к кликнутому элементу
//   clickedItem.classList.add("active");
// }

// // ============================================
// // ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// // ============================================
// document.addEventListener("DOMContentLoaded", function () {
//   // Находим ВСЕ ссылки в навигации
//   const navLinks = document.querySelectorAll(".nav-link");

//   // Для КАЖДОЙ ссылки добавляем обработчик клика
//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       // Предотвращаем переход по ссылке
//       e.preventDefault();

//       // Получаем ID секции из href ссылки
//       const targetId = this.getAttribute("href");

//       // Устанавливаем активный класс
//       setActiveNavItem(this);

//       // ДОПОЛНИТЕЛЬНО: Плавная прокрутка к секции
//       const targetSection = document.querySelector(targetId);
//       if (targetSection) {
//         targetSection.scrollIntoView({
//           behavior: "smooth", // Плавная анимация
//           block: "start", // Выровнять по верху
//         });
//       }
//     });
//   });

//   console.log("✅ Навигация готова к работе!");
//   console.log("Кликайте по пунктам меню для переключения активного состояния");
// });

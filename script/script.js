// Получаем все изображения внутри div с классом 'hero__money'
const moneyImages = document.querySelectorAll('.hero__money img');

// Функция для показа изображений поочередно с задержкой
function showImagesWithDelay() {
  // Используем forEach для перебора всех изображений
  moneyImages.forEach((img, index) => {
    // Устанавливаем задержку для показа каждого изображения
    setTimeout(() => {
      // Показываем текущее изображение, добавляя класс для отображения (можно использовать свои CSS классы)
      img.style.display = 'block';
    }, 2000 * index); // Задержка: 2 секунды * индекс изображения
  });
}

// Вызываем функцию после загрузки страницы
window.addEventListener('load', showImagesWithDelay);




const elements = document.querySelectorAll('.article1');

function isInViewport1(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll1() {
  elements.forEach(element => {
    if (isInViewport1(element)) {
      if (!element.classList.contains('in-view')) {
        element.classList.add('animate__animated', 'animate__backInLeft', 'in-view');
      }
    } 
  });
}

// Run handleScroll on page load and scroll event
window.addEventListener('load', handleScroll1);
window.addEventListener('scroll', handleScroll1);



const elements2 = document.querySelectorAll('.article2');

function isInViewport(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  elements2.forEach(element => {
    if (isInViewport(element)) {
      if (!element.classList.contains('in-view')) {
        element.classList.add('animate__animated', 'animate__backInRight', 'in-view');
      }
    } 
  });
}

// Run handleScroll on page load and scroll event
window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);



const elements3 = document.querySelectorAll('.animation__questions');

function isInViewport3(element) {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll3() {
  elements3.forEach(element => {
    if (isInViewport3(element)) {
      if (!element.classList.contains('in-view')) {
        element.classList.add('animate__animated', 'animate__backInLeft', 'in-view');
      }
    } 
  });
}

// Run handleScroll on page load and scroll event
window.addEventListener('load', handleScroll3);
window.addEventListener('scroll', handleScroll3);




// Tabs
const tabs = document.querySelectorAll('.calculator__tab');
const tabContents = document.querySelectorAll('.calculator__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Скрыть все содержимое вкладок
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Найти соответствующее содержимое вкладки и показать его
        const tabId = tab.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');

        // Убрать класс 'active' у текущей активной вкладки
        tabs.forEach((t, i) => {
            if (i === index) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
    });

    // По умолчанию показать первую вкладку
    if (index === 0) {
        tab.classList.add('active');
    }
});

// --------------------------------------------------------------------


const range1 = document.getElementById('range1');
const range2 = document.getElementById('range2');

function updateRangeColor(input) {
  const percent = (input.value - input.min) / (input.max - input.min);
  const progressBar = `linear-gradient(to right, #FFB800 0%, #FFB800 ${percent * 100}%, #7B7B7B ${percent * 100}%, #7B7B7B 100%)`;
  input.style.background = progressBar;
}

range1.addEventListener('input', function() {
  updateRangeColor(this);
});

range2.addEventListener('input', function() {
  updateRangeColor(this);
});

updateRangeColor(range1);
updateRangeColor(range2);


const range3 = document.getElementById('range3');
const range4 = document.getElementById('range4');

function updateRangeColor(input) {
  const percent = (input.value - input.min) / (input.max - input.min);
  const progressBar = `linear-gradient(to right, #FFB800 0%, #FFB800 ${percent * 100}%, #7B7B7B ${percent * 100}%, #7B7B7B 100%)`;
  input.style.background = progressBar;
}

range3.addEventListener('input', function() {
  updateRangeColor(this);
});

range4.addEventListener('input', function() {
  updateRangeColor(this);
});

updateRangeColor(range3);
updateRangeColor(range4);





// Аккардион
$(document).ready(() => {
  $(".products__accordion-contents-smart").hide();
  $(".products__accordion-heading-smart:first").addClass("active");

  $(".products__accordion-heading-smart:first")
      .next(".products__accordion-contents-smart")
      .slideDown();

  $(".products__accordion-container-smart").on("click", ".products__accordion-heading-smart", function () {
      const $accordionContainer = $(this).closest(".products__accordion-container-smart");
      const isActive = $(this).hasClass("active");
      $(".products__accordion-contents-smart").slideUp(300);
      $(".products__accordion-heading-smart").removeClass("active");
      $(".products__accordion-container-smart").removeClass("active");
      if (!isActive) {
          $(this).next().slideDown();
          $accordionContainer.addClass("active");
          $(this).addClass("active");
      }
  });
});
// --------------------------------------------------------------------

// Аккардион
$(document).ready(() => {
  $(".products__accordion-contents-trend").hide();
  $(".products__accordion-heading-trend:first").addClass("active");

  $(".products__accordion-heading-trend:first")
      .next(".products__accordion-contents-trend")
      .slideDown();

  $(".products__accordion-container-trend").on("click", ".products__accordion-heading-trend", function () {
      const $accordionContainer = $(this).closest(".products__accordion-container-trend");
      const isActive = $(this).hasClass("active");
      $(".products__accordion-contents-trend").slideUp(300);
      $(".products__accordion-heading-trend").removeClass("active");
      $(".products__accordion-container-trend").removeClass("active");
      if (!isActive) {
          $(this).next().slideDown();
          $accordionContainer.addClass("active");
          $(this).addClass("active");
      }
  });
});
// --------------------------------------------------------------------

// Аккардион
$(document).ready(() => {
  $(".questions__contents").hide();
  $(".questions__heading:first").addClass("active");

  $(".questions__heading:first")
      .next(".questions__contents")
      .slideDown();

  $(".questions__accardion").on("click", ".questions__heading", function () {
      const $accordionContainer = $(this).closest(".questions__accardion");
      const isActive = $(this).hasClass("active");
      $(".questions__contents").slideUp(300);
      $(".questions__heading").removeClass("active");
      $(".questions__accardion").removeClass("active");
      if (!isActive) {
          $(this).next().slideDown();
          $accordionContainer.addClass("active");
          $(this).addClass("active");
      }
  });
});
// --------------------------------------------------------------------


 // Бургер меню
 document.querySelectorAll('.burger-link-close').forEach(link => {
  link.addEventListener('click', () => {
      document.querySelector('.burger-icon').classList.remove('open');
      document.querySelector('.burger-menu').classList.remove('open');
      document.querySelector('.body').classList.remove('open');
  });
});
document.querySelector('.burger-icon').addEventListener('click', () => {
  document.querySelector('.burger-icon').classList.toggle('open');
  document.querySelector('.burger-menu').classList.toggle('open');
  document.querySelector('.body').classList.toggle('open');
});
// --------------------------------------------------------------------
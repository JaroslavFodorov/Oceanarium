/*// Получаем видимую часть слайда
let viewport = document.querySelector(".wrap-slider")/!*.offsetWidth*!/;
// Получаем кнопку вперёд
let btnNext = document.querySelector(".next");
// Получаем кнопку назад
let btnPrev = document.querySelector(".prev");
// Получаем элемент со всеми слайдами
/!*let slider = document.querySelector("div.gallery-collection");*!/
// Получаем элементы показа слайда
/!*let viewSliders = document.querySelectorAll(".slide");*!/
// Объявляем переменную номера слайда
let viewSlide = 0;*/

// Назначаем цвет индикатор слайда зелёный
/*viewSliders[0].style.backgroundColor = "green";*/

// Обработка клика на кнопку вперёд
/*btnNext.addEventListener("click", function () {

    viewport[viewSlide].style.display = 'none';
    viewport[++viewSlide].style.display = 'block';
    // Делаем индикатор слайда красный
    /!*viewSliders[viewSlide].style.backgroundColor = "red";
    // Условие, если номер слайда меньше четырёх
    if (viewSlide < 4) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    viewport.style.left = -viewSlide * viewport + "px";*!/
});*/

// Обработка клика на кнопку назад
/*btnPrev.addEventListener("click", function () {

    viewport[viewSlide].style.display = 'none';
    viewport[--viewSlide].style.display = 'block';
    // Делаем индикатор слайда красный
    /!*viewSliders[viewSlide].style.backgroundColor = "red";
    // Условие, если номер слайда больше нуля
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--;
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = 4;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    viewport.style.left = -viewSlide * viewport + "px";*!/
});*/


/*let btn_prev = document.querySelector('.prev');
let btn_next = document.querySelector('.next');

let images = document.querySelectorAll('.gallery-collection');
var i = 0;
btn_prev.onclick = function(){
    images[i].className = "";
    i = i - 1;
    if( i < 0){
        i = images.length - 1;
    }
    images[i].className = "shown";
};

btn_next.onclick = function(){
    images[i].className = "";
    i = i + 1; //i++
    if( i >= images.length){
        i = 0;
    }
    images[i].className = "shown";
};*/

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let slides = document.getElementsByClassName("gallery-collection");
    let dots = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
        dots[i].className = dots[i].className.replace("ellipse", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    dots[slideIndex - 1].className += " ellipse";
}

/*let photo = document.querySelectorAll('.img');
let gal = document.querySelector('#gallery')

for (let i = 0; i < photo.length; i++) {
    photo[i].addEventListener('click', function () {
        gal.style.position = 'relative'
        photo[i].classList.add('show');
    })
}

document.addEventListener('click', function (e) {
    for (let i = 0; i < photo.length; i++) {
        if (e.target !== photo[i]) {
            photo[i].classList.remove('show')
        }
    }
})*/

let reviewIndex = 1;
reviewShowSlides(reviewIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function reviewPlusSlide() {
    reviewShowSlides(reviewIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function reviewMinusSlide() {
    reviewShowSlides(reviewIndex -= 1);
}

/* Устанавливает текущий слайд */
function reviewCurrentSlide(n) {
    reviewShowSlides(reviewIndex = n);
}

/* Основная функция слайдера */
function reviewShowSlides(n) {
    let review = document.getElementsByClassName("reviews-content");
    let review_dots = document.getElementsByClassName("review_slide");

    if (n > review.length) {
        reviewIndex = 1
    }
    if (n < 1) {
        reviewIndex = review.length
    }

    for (let i = 0; i < review.length; i++) {
        review[i].style.display = "none";
    }
    for (let i = 0; i < review_dots.length; i++) {
        review_dots[i].className = review_dots[i].className.replace("active", "");
        review_dots[i].className = review_dots[i].className.replace("ellipse", "");
    }
    /*for (let i = 0; i < review_photo.length; i++) {
        review_photo[i].className = review_photo[i].className.replace("active-photo", "");
    }*/
    review[reviewIndex - 1].style.display = "block";
    review_dots[reviewIndex - 1].className += " active";
    review_dots[reviewIndex - 1].className += " ellipse";
    /*review_photo[reviewIndex - 1].className += "active-photo";*/
}

/*document.querySelector('.review-next').addEventListener('click', function () {
    let photo = document.querySelectorAll('.review-image')
    for (let i = 0; i < photo.length; i++) {
        photo[i].className += "active_photo"
    }
})*/

let active_review = document.querySelectorAll('.review-image')
let g = 0;
document.querySelector('.review-next').addEventListener('click', function () {
    g = (g + 1) % active_review.length;
    updateSelection();
})

document.querySelector('.review-prev').addEventListener('click', function () {
    g = (g + active_review.length - 1) % active_review.length;
    updateSelection();
})

function updateSelection() {
    var active = document.querySelector('.active-photo');
    if( active ) active.classList.remove('active-photo');
    active_review[g].classList.add('active-photo');
  }

let btnDetailed = document.querySelectorAll('.offer-content-items-button button')
let reservation = document.querySelector('#reservation-container');

for (let i = 0; i < btnDetailed.length; i++) {
    btnDetailed[i].addEventListener('click', function () {
        reservation.style.display = 'flex';
    });
}
document.querySelector('#reservation-container, #reservation-cancel-close').addEventListener('click', function (e) {
    if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
        document.querySelector('#reservation-container').style.display = 'none';
    }
});

/*$('.open-modal').click(() => {
    $('#reservation-container').css('display', 'flex')
});
$('#reservation-cancel-close, #reservation-container').click((e) => {
    if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
        $('#reservation-container').hide();
    }
});*/

/*document.querySelector('#button').addEventListener('click', function () {
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let text = document.querySelectorAll('.error-input')
    let hasError = false;
    let form = [name, phone];
    for (let i = 0; i < form.length; i++) {
        if (form[i].value === '') {
            form[i].style.border = '1px solid red'
            for (let j = 0; j < text.length; j++) {
                text[j].style.display = 'block'
            }
            let text = form[i].nextSibling
            text.style.display = 'block'
            hasError = true;
        } else {
            form[i].style.border = '1px solid green'
            for (let j = 0; j < text.length; j++) {
                text[j].style.display = 'none'
            }
        }
    }
})*/





/*let btnPhone = document.querySelector('#button')
btnPhone.addEventListener('click', function () {
    let gratitude = document.querySelector('#gratitude')
    gratitude.style.display = 'block';
})*/

let close = document.querySelector('#gratitude-cancel-close')
close.addEventListener('click', function () {
    let gratitude = document.querySelector('#gratitude')
    gratitude.style.display = 'none';
})

let priceBtn = document.querySelector('.price-button')
priceBtn.addEventListener('click', function () {
    let ticket = document.querySelector('#ticket-container')
    ticket.style.display = 'flex';
})

document.querySelector('#ticket-container, #ticket-cancel-close').addEventListener('click', function (e) {
    if (e.target.id === 'ticket-container' || e.target.id === 'ticket-cancel-close') {
        document.querySelector('#ticket-container').style.display = 'none';
    }
});

/*let ticketGratitude = document.querySelector('#ticket-gratitude')
document.querySelector('.ticket-button button').addEventListener('click', function () {
    document.querySelector('#ticket').style.display = 'none';
    ticketGratitude.style.display = 'flex';
});*/
document.querySelector('#ticket-gratitude-container, #ticket-gratitude-cancel-close').addEventListener('click', function (e) {
    if (e.target.id === 'ticket-gratitude-container' || e.target.id === 'ticket-gratitude-cancel-close') {
        //document.querySelector('#ticket-gratitude').style.display = 'none';
        document.querySelector('#ticket-container').style.display = 'none';
    }
});

/*$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);*/


let burgerMenu = document.querySelector('.burger')
burgerMenu.addEventListener('click', function () {
    document.querySelector('#menu-open-container').style.display = 'block'
})
document.querySelector('#menu-open-container, #menu-open-cancel-close').addEventListener('click', function (e) {
    if (e.target.id === 'menu-open-container' || e.target.id === 'menu-open-cancel-close') {
        //document.querySelector('#ticket-gratitude').style.display = 'none';
        document.querySelector('#menu-open-container').style.display = 'none';
    }
});


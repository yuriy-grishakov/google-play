// Связь с разработчиком

const contactsBtn = document.querySelector('.contacts-btn');
const contactsContent = document.querySelector('.contacts-content');

contactsBtn.addEventListener('click', function(){
	contactsBtn.classList.toggle('active');
	contactsContent.classList.toggle('active');
});


// Рейтинг

var star1 = document.querySelectorAll('.rating-area__item')[0];
var star2 = document.querySelectorAll('.rating-area__item')[1];
var star3 = document.querySelectorAll('.rating-area__item')[2];
var star4 = document.querySelectorAll('.rating-area__item')[3];
var star5 = document.querySelectorAll('.rating-area__item')[4];

star1.addEventListener('click', function(){
	star1.classList.add('active');
    star2.classList.remove('active');
    star3.classList.remove('active');
    star4.classList.remove('active');
    star5.classList.remove('active');
});
star2.addEventListener('click', function(){
	star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.remove('active');
    star4.classList.remove('active');
    star5.classList.remove('active');
});
star3.addEventListener('click', function(){
	star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.add('active');
    star4.classList.remove('active');
    star5.classList.remove('active');
});
star4.addEventListener('click', function(){
	star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.add('active');
    star4.classList.add('active');
    star5.classList.remove('active');
});
star5.addEventListener('click', function(){
	star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.add('active');
    star4.classList.add('active');
    star5.classList.add('active');
});


// Карусель в блоке «приложения разработчика»


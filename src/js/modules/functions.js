/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

// ======================  Меню бургер  =========================

const menuBtn = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/* function renderMenu() {
	menu.appendChild(Soc);
} */

/*==================  Плавная прокрутка при клике  =================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
});

//==================  Табы (вкладки)  =========================

console.log( 'test' );

const tabs = document.querySelectorAll( '.tab' );
const flotations = document.querySelectorAll( '.flotation' );

for( let i=0; i < tabs.length; i++ ) {
	tabs[i].addEventListener( 'click', ( event ) => {
		
		// Удаляем класс
		let tabsCurrent = event.target.parentElement.children;
		for( let t=0; t < tabsCurrent.length; t++ ) {
			tabsCurrent[t].classList.remove( 'tab__active' );
		}

		// Добавляем класс текущий
		event.target.classList.add( 'tab__active' );

		// Удаляем класс
		let flotationsCurrent = event.target.parentElement.nextElementSibling.children;
		for( let c=0; c < flotationsCurrent.length; c++ ) {
			flotationsCurrent[c].classList.remove( 'flotation__active' );
		}
		
		// Добавляем класс текущий
		flotations[i].classList.add( 'flotation__active' );
	});
}

//========================  Аккордион  =========================

document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');
			const pluswidth = self.querySelector('.plus-width');
			const plusheight = self.querySelector('.plus-height');

			content.classList.toggle('active');
			pluswidth.classList.toggle('active');
			plusheight.classList.toggle('active');

			self.classList.toggle('active');

			if (self.classList.contains('active')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px'; // убрать если не нужна анимация
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null; // убрать если не нужна анимация
			}
		});
	});
});
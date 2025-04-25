(function () {

// Модалка

const btn = document.querySelector('.button')
const modal = document.querySelector ('.modal')
const body = document.body

const openModal = () =>{
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}

const closeModal = () =>{
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

    btn.addEventListener('click', openModal)


modal.addEventListener('click', event =>{
    const target = event.target

    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')){
        closeModal()
    }
})


document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        closeModal()
    }
})

// Аккордион

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
    const button = document.getElementById('flipButton');
    const icon = document.getElementById('icon');

    button.addEventListener('click', () => {
        icon.classList.toggle('flipped');
    });

    // Слайдеры

new Swiper('.news__slider', {

        spaceBetween: 20,
        slidesPerView: 4,
        loop: true,

        navigation: {
            nextEl: '.news__next',
            prevEl: '.news__prev',
        },

    });
    

new Swiper('.job__slider', {

        spaceBetween: 20,
        slidesPerView: 4,
        loop: true,

        navigation: {
            nextEl: '.job__next',
            prevEl: '.job__prev',
        },
    });
})()


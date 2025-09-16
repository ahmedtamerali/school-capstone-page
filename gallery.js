const gallery_container = document.querySelector('.gallery .slider');
const card_width = gallery_container.querySelector('li').offsetWidth;

document.getElementById('btn-right').addEventListener('click',()=>{
    gallery_container.scrollLeft += card_width;
});

document.getElementById('btn-left').addEventListener('click',()=>{
    gallery_container.scrollLeft -= card_width;
});

let cards = [...gallery_container.children];
let card_per_view = Math.round(gallery_container.offsetWidth / card_width);
let autoplayid;

// Infinite scroll - clone first and last cards

cards.slice(0, card_per_view).forEach(card => {
    gallery_container.insertAdjacentHTML('beforeend', card.outerHTML);
});

cards.slice(-card_per_view).reverse().forEach(card => {
    gallery_container.insertAdjacentHTML('afterbegin', card.outerHTML);
});

gallery_container.scrollLeft = gallery_container.offsetWidth;

// Infinite scroll - scroll to beginning/end if scrollLeft is 0 or maximum

gallery_container.addEventListener('scroll', () => {
    if(gallery_container.scrollLeft === 0){
        gallery_container.classList.add('scroll-loop');
        gallery_container.scrollLeft = gallery_container.scrollWidth - (2*gallery_container.offsetWidth);
        gallery_container.classList.remove('scroll-loop');
    }
    else if(Math.ceil(gallery_container.scrollLeft) === gallery_container.scrollWidth - gallery_container.offsetWidth){
        gallery_container.classList.add('scroll-loop');
        gallery_container.scrollLeft = gallery_container.offsetWidth;
        gallery_container.classList.remove('scroll-loop');
    }
})

//auto play

const autoplay = () => {
    autoplayid = setInterval(() => {
        gallery_container.scrollLeft += card_width;
    }, 2500)
};

autoplay();

gallery_container.addEventListener('mouseenter',() => clearInterval(autoplayid))
gallery_container.addEventListener('mouseleave',()=>autoplay())
document.querySelectorAll('.gallery .btn').forEach(button => {
    button.addEventListener('mouseenter',() => clearInterval(autoplayid))
    button.addEventListener('mouseleave',autoplay)
})
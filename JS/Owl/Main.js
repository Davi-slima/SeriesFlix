$('.owl-carousel').owlCarousel({
    loop:true,
    margin:12,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) =>{
            if(e.target.className== 'fechar'){
                modal.classList.remove('mostrar');
            }
        })
    }
}

const trailer = document.querySelector('.assistir');

trailer.addEventListener('click', () => {
    iniciaModal('modal-trailer');
});



let bg = document.getElementById('bg');
let imgs = ['../../images/Banners/banner_jg.png','../../images/Banners/banner_jogo_sertao.png','../../images/Banners/banner1.jpg','../../images/Banners/banner2.jpg','../../images/Banners/banner3.jpg'];

let indice = 0;

other_img();

function other_img(){
    bg.style.backgroundImage = `url(${imgs[indice]})`;

    indice++;
    if(indice > imgs.length - 1){
        indice = 0;
    }
}

setInterval(other_img, 4000);
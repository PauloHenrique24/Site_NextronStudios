let bg = document.getElementById('bg');
let imgs = [
    '../../images/Banners/banner_jogo_sertao.png',
    '../../images/Banners/banner_terrius.png',
    '../../images/Banners/capaGalaxiumExtraction.jpg'
];

let indice = 0;
let preloadedImgs = [];


// Função para pré-carregar imagens
function preloadImages(imageArray, callback) {
    let loadedImages = 0;
    let totalImages = imageArray.length;

    imageArray.forEach((src, index) => {
        preloadedImgs[index] = new Image();
        preloadedImgs[index].src = src;
        preloadedImgs[index].onload = function() {
            loadedImages++;
            if (loadedImages === totalImages) {
                callback();
            }
        };
        preloadedImgs[index].onerror = function() {
            console.error('Erro ao carregar a imagem:', src);
        };
    });
}

// Carrega a primeira imagem
preloadImages(imgs, function() {
    other_img();
});

// Função para alternar as imagens de fundo
function other_img() {
    bg.style.backgroundImage = `url(${imgs[indice]})`;

    indice++;
    if (indice > imgs.length - 1) {
        indice = 0;
    }
}

// Pré-carrega as imagens e inicia o intervalo após todas estarem carregadas
preloadImages(imgs, function() {
    other_img();
    setInterval(other_img, 4000);
});
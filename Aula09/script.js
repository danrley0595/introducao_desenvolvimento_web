let slides = document.querySelectorAll(".slide");
let atual = 0;

function mostrarSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[atual].style.display = "block";
}

function proximoSlide() {
    atual++;

    if (atual >= slides.length) {
        atual = 0;
    }

    mostrarSlide();
}

function voltarSlide() {
    atual--;

    if (atual < 0) {
        atual = slides.length - 1;
    }

    mostrarSlide();
}

mostrarSlide();

setInterval(proximoSlide, 3000);

/*Utilizado JS para adicionar conhecimento aprendido com o Gabriel, alguns pontos como setInterval e 
seta para o proximo slide foram discutidos em aula.*/
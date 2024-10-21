function tocaSom(selectorAudio) {
    const elemento = document.querySelector(selectorAudio)
    
    if (!elemento){
        console.log(`Elemento ${selectorAudio} não encontrado`);
    }
    else {
        if (elemento.localName === 'audio') {
            elemento.play();
        }
        else {
            console.log(`Elemento ${selectorAudio} não é um audio`);    
        }
    }
}

document.querySelectorAll('.tecla').forEach(tecla => {
    tecla.onclick = function (event) { 
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('ativa')) {
            elementoClicado.classList.remove('ativa');
        } else {
            elementoClicado.classList.add('ativa');
        }

        tocaSom(`#som_${tecla.classList[1]}`);
    }
    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
});

/*
//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () { 
        tocaSom(idAudio);
    }
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log(instrumento);

    tecla.onclick = function () { 
        tocaSom(idAudio);
    };

    contador++;

    console.log(contador);
}
*/

//alert('Olá mundo');

/*
const teclaPom = document.querySelector('.tecla_pom');
const teclaClap = document.querySelector('.tecla_clap');
const teclaTim = document.querySelector('.tecla_tim');
const teclaPuff = document.querySelector('.tecla_puff');
const teclaSplash = document.querySelector('.tecla_splash');
const teclaToim = document.querySelector('.tecla_toim');
const teclaPsh = document.querySelector('.tecla_psh');
const teclaTic = document.querySelector('.tecla_tic');
const teclaTom = document.querySelector('.tecla_tom');
const somTeclaPom = document.querySelector('#som_tecla_pom');
const somTeclaClap = document.querySelector('#som_tecla_clap');
const somTeclaTim = document.querySelector('#som_tecla_tim');
const somTeclaPuff = document.querySelector('#som_tecla_puff');
const somTeclaSplash = document.querySelector('#som_tecla_splash');
const somTeclaToim = document.querySelector('#som_tecla_toim');
const somTeclaPsh = document.querySelector('#som_tecla_psh');
const somTeclaTic = document.querySelector('#som_tecla_tic');
const somTeclaTom = document.querySelector('#som_tecla_tom');

teclaPom.onclick = tocaSomPom;
teclaClap.onclick = tocaSomClap;
teclaTim.onclick = tocaSomTim;
teclaPuff.onclick = tocaSomPuff;
teclaSplash.onclick = tocaSomSplash;
teclaToim.onclick = tocaSomToim;
teclaPsh.onclick = tocaSomPsh;
teclaTic.onclick = tocaSomTic;
teclaTom.onclick = tocaSomTom;

function tocaSomPom() {
    somTeclaPom.play();
}

function tocaSomClap() {
    somTeclaClap.play();
}

function tocaSomTim() {
    somTeclaTim.play();
}

function tocaSomPuff() {
    somTeclaPuff.play();
}

function tocaSomSplash() {
    somTeclaSplash.play();
}

function tocaSomToim() {
    somTeclaToim.play();
}

function tocaSomPsh() {
    somTeclaPsh.play();
}

function tocaSomTic() {
    somTeclaTic.play();
}

function tocaSomTom() {
    somTeclaTom.play();
}
*/
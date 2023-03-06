//Capturar evento de submit do formulário

const form = document.querySelector('#form');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso){
        setResultado('Peso Inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }
    
    const imc = getImc(peso, altura);
    const grauImc = getGrauImc(imc);

    const msg = `Seu IMC é ${imc} (${grauImc}).`;

    setResultado(msg, true);
    
});
    function getGrauImc(imc){
        if(imc > 39.9){
            return 'Obesidade grau 3';
        }
        if(imc > 34.9){
            return 'Obesidade grau 2';
        }
        if(imc > 29.9){
            return 'Obesidade grau 1';
        }
        if(imc > 24.9){
            return 'Sobrepeso';
        }
        if(imc > 18.5){
            return 'Peso Normal';
        }
        if(imc <= 18.5){
            return 'Abaixo do peso';
        }
    }

    function getImc(peso, altura){
        const imc = peso / (altura * altura);
        return imc.toFixed(2);
        
    }

function criaParagrafo(){
    const paragrafo = document.createElement('p');
    return paragrafo;
    
    
}

function setResultado(msg, valido){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const paragrafo = criaParagrafo();

    if(valido){
        paragrafo.classList.add('paragrafo-resultado');
    }else{
        paragrafo.classList.add('paragrafo-resultado-erro');    
    }

    resultado.appendChild(paragrafo);
    paragrafo.innerHTML = msg
}

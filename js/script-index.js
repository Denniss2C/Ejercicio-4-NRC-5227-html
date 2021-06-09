var personas = [];

function calcularIMC(){
    //Lectura de los valores desde los INPUTs
    let strnombre = document.getElementById('txtNombre').value;
    let strEstatura = document.getElementById('txtEstatura').value;
    let strPeso = document.getElementById('txtPeso').value;
    //Conversion de los valores de String a Integer
    //let nombre = parseInt(strNombre);
    
    let estatura = parseInt(strEstatura) *0.01;
    let peso = parseInt(strPeso);
    //Implementa el modelo matematico
    let imc = peso / Math.pow(estatura,2);
    //Evalua el imc
    let evaluacion = evaluarIMC(imc);
    //Crea la imagen en el DOM
    let img = document.createElement('img');
    img.src = "images/" + evaluacion + ".jpeg";
    img.alt = evaluacion;
    img.width = 24;
    img.height = 24;
    //pesentacion de resultados
    document.getElementById('pResultado').innerText= strnombre +" tiene un IMC de "+ imc.toFixed(2)+" y se cataloga como "+evaluacion;
    //Exaxo la imagen
    document.getElementById('pResultado').append(img);
    return imc;
}

function evaluarIMC(imc){
    let resultado = '';
    if(imc >= 18.5 && imc <24.99){
        resultado = "normal";
    } else if(imc >= 25.0 && imc <= 30.0){
        resultado = "sobrepeso";
    } else if (imc > 30.00){
        resultado = "obesidad";
    }else{
        resultado = "bajo";
    }
    return resultado;
}


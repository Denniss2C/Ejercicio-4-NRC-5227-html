function cancel(){
    document.getElementById('myForm').reset();
}

function send(){
    const myForm = document.getElementById('myForm');
    myForm.submit();
}

function setup(){
    const imagen_inicio = document.getElementById('imgMain');
    imagen_inicio.setAttribute('alt','imagen e la mejor');
    imagen_inicio.setAttribute('src','images/bajo.jpeg');

    const myForm = document.getElementById('myForm');
    myForm.setAttribute('action','results.html');
}


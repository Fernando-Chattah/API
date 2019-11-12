var datos = () => {
    console.log("pase por acà");
        fetch ('http://localhost:3000/clientes')
        .then(res => res.json())
        .then((JSON) => console.log(JSON));
        console.log(JSON);
        return JSON;  
}    

let boton = document.getElementById("api");
boton.addEventListener("onclick", datos());

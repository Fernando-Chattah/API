fetch ('https://swapi.co/api')
    .then(res => res.json())
    .then((JSON) => console.log(JSON));

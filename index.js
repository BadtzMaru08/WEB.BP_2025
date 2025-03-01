function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
        console.log(res)
        return res.json()
    }).then((data) => {
        console.log(data);
        document.querySelector("#tennis-ball").src = data.message;
    });
}

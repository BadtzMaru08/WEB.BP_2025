function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
        console.log(res)
        return res.json()
    }).then((data) => {
        console.log(data);
        document.querySelector("#tennis-ball").src = data.message;
    });
}

function getDog(){
    let breed = document.querySelector("#breed").value;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then((res) => {
        if (!res.ok){
            //error has occured; we should do somthing!!
            alert("Bone not found - try again!");
            return;
        }
        console.log(res)
        return res.json()
    }).then((data) => {
        console.log(data);
        document.querySelector("#tennis-ball").src = data.message;
    });
}



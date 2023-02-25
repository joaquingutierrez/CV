const pedirInfo = () => {
    console.log("hola")
    fetch("../data.json")
    .then((data => data.json()))
    .then((data) => console.log(data))
}

pedirInfo()
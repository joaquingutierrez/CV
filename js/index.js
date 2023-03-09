const cardContainer = document.getElementsByClassName("cardContainer")[0]
const darkLightButton = document.getElementsByClassName("darkLight")[0]

const pedirInfo = () => {
    fetch("../data.json")
        .then((data => data.json()))
        .then((data) => {
            let acum = ""
            let acumTech = ""
            data.map(card => {
                card.technology.map(tec => {
                    acumTech += `<p>${tec}</p>`
                })
                acum += `
                    <div class="card">
                        <a href=${card.linkToWebSite} target="_blank"><img src=${card.image} alt="Página web de fotografia"></a>
                        <h3>${card.name}</h3>
                        <div class="cardTechnology">
                            ${acumTech}
                        </div>
                        <a class="linkToRepo" href=${card.linkToRepo} target="_blank"><h4>Link to repo</h4></a>
                    </div>
                `
                acumTech = ""
            })
            cardContainer.innerHTML += acum
        })
}

pedirInfo()

darkLightButton.addEventListener("click", () => {
    const body = document.getElementsByTagName("body")[0]
    if (body.classList.contains("light")) {
        darkLightButton.classList.remove("darkLightAfter")
        return body.classList.remove("light")

    }
    body.classList.add("light")
    darkLightButton.classList.add("darkLightAfter")
})
const cardContainer = document.getElementsByClassName("cardContainer")[0]

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
                        <a href=${card.linkToRepo} target="_blank">Link to repo</a>
                    </div>
                `
                acumTech = ""
            })
            cardContainer.innerHTML += acum
        })
}

pedirInfo()
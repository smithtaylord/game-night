export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0
    }

    get HTMLTemplate() {
        return `
    <div class="card">
        <div class="card-body">
            <h3>${this.name}</h3>
            <div>
            <button class="btn btn-danger" onclick="app.playersController.decreasePlayersScore('${this.name}')">-</button>  
            ${this.score} <button class="btn btn-success" onclick="app.playersController.increasePlayersScore('${this.name}')">+</button>
            </div>
        </div>
    </div>
    `


        // <p> Players Name: ${player.name} ---<button onclick="app.playersController.decreasePlayersScore('${player.name}')">-</button>  
        // Score:${player.score} <button onclick="app.playersController.increasePlayersScore('${player.name}')">+</button></p>

    }

}
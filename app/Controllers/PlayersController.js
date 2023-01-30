import { appState } from "../AppState.js";
import { playerService } from "../Services/PlayersService.js";


export class PlayersController {
    drawPlayers() {
        let players = appState.players;
        // console.log('drawing players', players);
        let names = ''
        players.forEach(player => names += `
        <p> Players Name: ${player.name} ---<button onclick="app.playersController.decreasePlayersScore('${player.name}')">-</button>  
        Score:${player.score} <button onclick="app.playersController.increasePlayersScore('${player.name}')">+</button></p>
        `)
        // console.log(names);
        document.getElementById('players').innerHTML = names
    }

    increasePlayersScore(name) {
        // console.log('Controller Page', name);
        playerService.increasePlayersScore(name)
        this.drawPlayers()
    }

    decreasePlayersScore(name) {
        // console.log('Decreased Score for ', name);
        playerService.decreasePlayersScore(name)
        this.drawPlayers()
    }

    constructor() {
        // console.log('draw players');
        this.drawPlayers()
    }
}
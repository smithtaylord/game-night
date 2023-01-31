import { appState } from "../AppState.js";
import { playerService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js"


export class PlayersController {
    drawPlayers() {
        let players = appState.players;
        // console.log('drawing players', players);
        let names = ''
        players.forEach(player => names += player.HTMLTemplate)
        // console.log(names);
        document.getElementById('players').innerHTML = names
    }

    addPlayer() {
        window.event.preventDefault()
        const form = window.event.target
        let playerData = getFormData(form)
        playerService.addPlayer(playerData)
        form.reset()
        this.drawPlayers()
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
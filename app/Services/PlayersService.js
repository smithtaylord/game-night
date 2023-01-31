import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";


class PlayersService {
    addPlayer(playerData) {
        let newPlayer = new Player(playerData.name)
        // console.log(playerData);
        appState.players.push(newPlayer)
    }

    increasePlayersScore(name) {
        let player = appState.players.find(player => player.name == name)
        // console.log('Service Page ', name);
        player.score++
    }

    decreasePlayersScore(name) {
        let player = appState.players.find(player => player.name == name)
        player.score = player.score - 1
    }

}

export const playerService = new PlayersService()
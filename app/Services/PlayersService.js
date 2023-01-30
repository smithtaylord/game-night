import { appState } from "../AppState.js";


class PlayersService {
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
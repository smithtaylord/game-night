import { PlayersController } from "./Controllers/PlayersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController(); not needed for this project
  playersController = new PlayersController();

}

window["app"] = new App();

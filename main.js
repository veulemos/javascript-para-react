import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);
const $htmlPlayerName = PlayerName("Player1");
const $htmlPlayerName2 = PlayerName("Player2");
$root.insertAdjacentHTML(
    "beforeend", //' ${PlayerName("Player1")} ${PlayerName("Player2")} ${BoardName(6)}'
    $htmlPlayerName + $htmlPlayerName2 + $htmlBoardGame
    
    );


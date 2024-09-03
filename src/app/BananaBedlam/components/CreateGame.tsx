import Game from "./Game";
import { createInputManager, InputManager } from "./InputManager";
import "../config/mongoConfig";

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found');
}
rootElement.focus();

export default function CreateGame() {

    return (<Game />);
}

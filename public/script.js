import { onClickClearButton, onSubmitForm } from "./controller/home_controller.js";

document.querySelector('#form-input').onsubmit = onSubmitForm;
document.getElementById('clearButton').onclick = onClickClearButton;
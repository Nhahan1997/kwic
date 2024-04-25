import { MasterControl } from "../model/MasterControl.js";
import { root } from "../view/elements.js";

export function onSubmitForm(e) {
    e.preventDefault();


    let input = e.target.querySelector('#input-textarea').value;

    let MasterControlObj = new MasterControl();
    let output = MasterControlObj.generate(input);


    let outputTextarea = root.querySelector('#output-textarea');
    outputTextarea.value = output;


}

export function onClickClearButton(e) {
    root.querySelector('#input-textarea').value = '';
    root.querySelector('#output-textarea').value = '';
}
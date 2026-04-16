import Address from "../models/address.js";

function State(){

    this.address = new Address();
    this.btnSave = null;
    this.btnClear = null;
    
    this.inputCep = null;
    this.inputStreet = null;
    this.inputNumber = null;
    this.inputCity = null;

    this.errorCep = null;
    this.errorNumber = null;
    
}

const state = new State();              

export function init(){
    state.inputCep = document.forms.newAddress.cep;
    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnClear = document.forms.newAddress.btnClear;

    state.errorCep = document.querySelector(".error-message[data-error='cep']");
    state.errorNumber = document.querySelector(".error-message[data-error='number']");

    state.inputNumber.addEventListener("change", handleInputNumberChange);
    console.log(state);

}

function handleInputNumberChange(event){
    if(event.target.value == ""){
        setFormError("number", "Campo requerido");  
    }
    else{
        setFormError("number", "");  
    }
}

function setFormError(field, message){
    const element = document.querySelector(`.error-message[data-error="${field}"]`);
    element.innerHTML = message;

}
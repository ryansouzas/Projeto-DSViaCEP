import Address from '../models/address.js';
import * as addressService from '../services/address-service.js';

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
    state.btnClear.addEventListener("click", handleBtnClearClick);
    state.btnSave.addEventListener("click", handleBtnSaveClick);


    state.inputCep.addEventListener("change", handleInputCepChange);
}

async function handleInputCepChange(event){
    const cep = event.target.value;
    
    try{
        const address = await addressService.findByCep(cep);

        state.inputStreet.value = address.street;
        state.inputCity.value = address.city;
        state.address = address;
        
        setFormError("cep", "");
        state.inputNumber.focus();
    }
    catch(e){
        state.inputStreet.value = "";
        state.inputCity.value = "";
        setFormError("cep", "Informe um cep válido");
    }

    console.log(address);

}

async function handleBtnSaveClick(event){
    event.preventDefault();
    console.log(event.target);
}

function handleInputNumberChange(event){
    if(event.target.value == ""){
        setFormError("number", "Campo requerido");  
    }
    else{
        setFormError("number", "");  
    }
}

function handleBtnClearClick(event){
    event.preventDefault();
    clearForm();
    console.log("btn clicked");
}

function clearForm(){
    state.inputCep.value = "";
    state.inputStreet.value = "";
    state.inputNumber.value = "";
    state.inputCity.value = "";
    setFormError("cep", "");
    setFormError("number", "");
    state.inputCep.focus();
}

function setFormError(field, message){
    const element = document.querySelector(`.error-message[data-error="${field}"]`);
    element.innerHTML = message;

}
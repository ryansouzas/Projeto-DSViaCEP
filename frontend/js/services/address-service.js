import Address from "../models/address.js";
import * as requestService from "./request-service.js";

export async function findByCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const addressData = await requestService.getJson(url);
    
    const adress = new Address(
        addressData.cep,
        addressData.logradouro,
        null,
        addressData.localidade
    );
    return adress;
}

export function getErrors(address){
    const errors = {};

    if(!address.cep || address.cep == ""){
        errors.cep = "Campo requerido";
    }

    if(!address.number || address.number == ""){
        errors.number = "Campo requerido";
    }

    return errors;
}
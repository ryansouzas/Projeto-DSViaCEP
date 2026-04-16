import RequestException from "./exceptions/request-exception.js";

export async function getJson(url){ 
    try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
    } catch (error) {   
        throw new RequestException("Erro ao realizar requisição");
    }   
}
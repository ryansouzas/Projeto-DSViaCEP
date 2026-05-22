# 📮 Projeto DS ViaCEP

Aplicação web frontend para consulta de endereços a partir de CEPs brasileiros, consumindo a [API pública ViaCEP](https://viacep.com.br).

---

## 🖥️ Demonstração

> Acesse o repositório em: [github.com/ryansouzas/Projeto-DSViaCEP](https://github.com/ryansouzas/Projeto-DSViaCEP)

---

## 📋 Sobre o Projeto

O **DS ViaCEP** é uma aplicação frontend que permite ao usuário digitar um CEP brasileiro e visualizar instantaneamente as informações do endereço correspondente, como logradouro, bairro, cidade e estado, utilizando a API gratuita do ViaCEP.

---

## ✨ Funcionalidades

- 🔍 Consulta de endereço a partir de um CEP informado
- 📄 Exibição de dados como logradouro, bairro, cidade, estado e DDD
- ⚠️ Tratamento de erros para CEPs inválidos ou não encontrados
- 📱 Interface responsiva

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia   | Descrição                             |
|--------------|---------------------------------------|
| HTML5        | Estrutura da aplicação                |
| CSS3         | Estilização e responsividade          |
| JavaScript   | Lógica de consumo da API e manipulação do DOM |
| [ViaCEP API](https://viacep.com.br) | Webservice público de consulta de CEPs |

---

## 🚀 Como Executar

### Pré-requisitos

- [Git](https://git-scm.com)
- Navegador web moderno (Chrome, Firefox, Edge...)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/ryansouzas/Projeto-DSViaCEP.git

# Entre na pasta do projeto
cd Projeto-DSViaCEP/frontend

# Abra o arquivo index.html no navegador
# Windows
start index.html

# Linux / Mac
open index.html
```

---

## 📡 Sobre a API ViaCEP

A aplicação consome a API REST pública do ViaCEP. Exemplo de requisição:

```
GET https://viacep.com.br/ws/{CEP}/json/
```

**Resposta:**
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ddd": "11"
}
```

---

## 📁 Estrutura do Projeto

```
Projeto-DSViaCEP/
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b minha-feature`
3. Faça o commit das suas alterações: `git commit -m "feat: minha nova feature"`
4. Envie para o seu fork: `git push origin minha-feature`
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💙 por [ryansouzas](https://github.com/ryansouzas)

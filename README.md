[externalLink]: <http://daringfireball.net/projects/markdown/>
# Templates para extensões do Quoti
Este repositório contém templates para extensões com ou sem build utilizadas na plataforma Quoti.

## Extensões sem build
- São extensões que não precisam de build durante todo o processo de desenvolvimento
- Tendem a ser mais rápidas, porém não é aconselhável utilizá-la em grandes projetos, devido a sua limitação de não poder importar arquivos e nem instalar dependências externas ao Quoti

## Extensões com build
- São extensões que precisam de build durante todo o processo de desenvolvimento
- É possível importar diversos arquivos além poder instalar dependências externas ao Quoti.
- Podemos utilizar a mesma árvore de arquivos que geralmente encontramos durante o desenvolvimento Front-end de qualquer aplicação

## Features

Com o quoti-apps você está no controle. Veja o que você poder fazer durante o desenvolvimento das extensões
- Utilizar o Firestore da sua organização, pois toda extensão tem seu própria firestore criada por padrão.
- Ter acesso a toda nossa API que usamos para gerenciar diversas funcionalidades como por exemplo listar os usuários da sua organização
- Ter acesso a toda nossa Store e obter diversos dados como, por exemplo, o CPF, nome e telefone do usuário.
- Criar store dinâmica utilizando o Vuex. Dessa forma você pode desenvolver extensões utilizando sua arquitetura de projeto preferida

## Como usar cada feature
Saiba mais clicando [aqui][externalLink]
## Instalação

Há duas maneiras de adotar esse template em seus projetos.
1. Realizando o clone deste repositório
    
    ```sh
    git clone https://github.com/byndcloud/quoti-app-template.git
    cd ./quoti-app-template
    ```
1. Instalando nossa CLI
    ```sh
    npm -g install quoti-cl
    ```
    Em seguida, execute o comando inti
    ```sh
    qt init
    ```
## License
MIT
**Criado com :heart: pela Beyond Co**
[notionDocs]: <https://www.notion.so/beyondco/Templates-de-extens-es-para-o-Quoti-794e667d17e54072b2cc31deb1dddaca>
[cli]: <https://github.com/byndcloud/quoti-cli>
# Templates para extensões do Quoti
Este repositório contém templates para extensões com ou sem build utilizadas na plataforma Quoti. Especificamente, esse template é usado pelos comandos `qt init` e `qt create` da [nossa CLI][cli].

## Extensões sem build
- São extensões que não precisam de build durante todo o processo de desenvolvimento
- Tendem a ser mais rápidas, porém não é aconselhável utilizá-la em grandes projetos, devido a sua limitação de não poder importar arquivos e nem instalar dependências externas ao Quoti

## Extensões com build
- São extensões que precisam de build durante todo o processo de desenvolvimento
- É possível importar diversos arquivos além poder instalar dependências externas ao Quoti.
- Podemos utilizar a mesma árvore de arquivos que geralmente encontramos durante o desenvolvimento Front-end de qualquer aplicação

## Features

Com o quoti-apps você está no controle. Veja o que você poder fazer durante o desenvolvimento das extensões
- Utilizar o banco de dados Firestore da sua organização, pois toda extensão tem um documento (que pode ter subcollections) no Firestore do Quoti.
- Ter acesso a toda nossa API que usamos para gerenciar diversas funcionalidades como por exemplo listar os usuários da sua organização
- Ter acesso a toda nossa Vuex Store e obter diversos dados como, por exemplo, o token de autenticação, e dados pessoais do usuário que está logado.
- Criar seus próprios módulos no Vuex do Quoti. Dessa forma você pode desenvolver extensões utilizando sua arquitetura de projeto preferida.

## Como usar cada feature
Saiba mais clicando [aqui][notionDocs]
## Instalação

Há duas maneiras de adotar esse template em seus projetos.
1. Instalando nossa CLI e usando o comando qt init (recomendado)
    ```sh
    npm -g install quoti-cli
    ```
    Em seguida, execute o comando init
    ```sh
    qt init
    ```
2. Realizando o clone deste repositório...
    
    ```sh
    git clone https://github.com/byndcloud/quoti-app-template.git
    cd ./quoti-app-template
    ```
    ...e usando uma das pastas extension-no-build ou extension-with-build dependendo do tipo de extensão que você deseja.

## License
MIT
**Criado com :heart: pela Beyond Co**
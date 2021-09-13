# POC AdonisJS com TypeScript e Swagger

### Uma POC de uma API de administração de usuários onde é possível visualizar, adcionar e buscar usuários.

## :rocket: Tecnologias

Este projeto foi desenvolvido como uma POC com as seguintes tecnologias:

- [Node.js][nodejs]
- [AdonisJS](https://adonisjs.com/)
- [Docker](https://www.docker.com/docker-community)
- [PostgreSQL](https://www.postgresql.org/)
- [VS Code][vc] with [ESLint][vceslint], [EditorConfig][vceditconfig] and [Prettier][vcprettier]

## :information_source: Como Utilizar

Para clonar e rodar essa aplicação, você precisará do [Git](https://git-scm.com), [Docker](https://www.docker.com/docker-community), [AdonisJS](https://adonisjs.com/), [Node.js v12.18][nodejs] ou superior + [Yarn v1.22][yarn] ou superior instalado no seu computador.
Da sua linha de comando:

```bash
# For create a Docker container with MySQL configured for this project
$ docker run --name pocadonis -e POSTGRES_PASSWORD=adonis -e POSTGRES_DB=telemed -e POSTGRES_USER=admin -p 5432:5432 -d postgres

# Clone this repository
$ git clone https://github.com/JapBastos/pocadonis

# Go into the repository
$ cd pocadonis

# Install dependencies
$ yarn

# Run to start the development server
$ yarn dev
```

Made with ♥ by João Bastos [Get in touch!](https://www.linkedin.com/in/japbastos/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

<p align="center">
    <a href="https://github.com/roremdev/rick-morty/javascript">
        <img src="https://img.shields.io/badge/JavaScript-0.1.0-green?style=for-the-badge&logo=JavaScript" alt="JavaScript" />
    </a>
    <a href="https://github.com/roremdev/rick-morty/react">
        <img src="https://img.shields.io/badge/React-gray?style=for-the-badge&logo=React" alt="React" />
    </a>
    <a href="https://github.com/roremdev/rick-morty/vue">
        <img src="https://img.shields.io/badge/Vue-gray?style=for-the-badge&logo=Vue.js" alt="Vue" />
    </a>
    <a href="https://github.com/roremdev/rick-morty/svelte">
        <img src="https://img.shields.io/badge/Svelte-gray?style=for-the-badge&logo=Svelte" alt="Svelte" />
    </a>
</p>

<p align="center">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
    <h3 align="center">SPA Rick & Morty</h3>
    <p align="center"> A little spa app built with React, Vue, Svelte</p>
</p>

## About The Project

The propuse of this project is to create a SPA (Single Page Application) that will be a simple example of how to use React, Vue, Svelte and other modern frontend technologies.

The use for this project will depend on the use case:

-   For customize the integration project with builders like webpack, rollup, etc.
-   For create pipelining for hooks made in git/github, travis, cypress, etc.
-   Also, for improve the inside code or testing new features either in the frontend or fetching data from some kind of API (REST API, GraphQL, etc).

### Built with Vite ⚡️

<img src="https://img.shields.io/badge/Vite-2.4.4-green?style=for-the-badge&logo=Vite" alt="vite" />

The initial construction of this project was made with [Vite](https://vitejs.dev/).

The main fact for use Vite is because all solutions, separately, are lowing developer experience in measure that applications is growing.

Vite improves the dev server start time by first dividing the modules in an application into two categories: **dependencies** and **source code**.

Other reasons for using Vite are:

-   [Improve updates](https://vitejs.dev/guide/why.html#slow-updates)
-   [Bundle for productions](https://vitejs.dev/guide/why.html#why-bundle-for-production)

## Getting Started

> Note. Vite requires <a href="https://nodejs.org/en/">Node.js</a> version >=12.0.0.

### Branches

For check each version code, you can change the current branch:

```bash
    git checkout [branch_name]
```

Branch names supported are:

-   `javascript`: JavaScript vanilla
-   `react`: React library
-   `vue`: Vue framework
-   `svelte`: Svelte framework

> Note. You need to install all dependencies from `package.json`. Recomended with `npm install`.

## Git Actions

According with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), the commit message should be structured as follows:

```bash
    <type>: devmoji <description>
```

> Note. [Devmoji](https://github.com/folke/devmoji) is a GitHub emoji for developers that adds colors/emojis to conventional commits, inspired by [Gitmoji](https://gitmoji.com/) 😜

The commit contains the following structural elements:

-   `fix`: A commit that patches a bug in codebase (this correlates with `PATCH` in Semantic Versioning).
-   `feat`: A commit that introduces a new feature(s) to the codebase (this correlates with `MINOR` in Semantic Versioning).
-   `release`: A commit that contains a new version of the codebase (this corresponds to `MAJOR` in Semantic Versioning).
-   `refac`: A code change that neither fixes a bug nor adds a features.
-   `docs`: A commit that changes the documentation.

Depending of your terminal configuration, you can write alias for keyshort binding with git actions.

### Semantic Versioning

Semantic versioning (also referred as SemVer) is a versioning system that has been on the rise over the last few years.

Semantic Versioning is a 3-component number in the format of X.Y.Z, where :

-   X stands for a `MAJOR` version.
-   Y stands for a `MINOR` version.
-   Z stands for a `PATCH`.

The goal of SemVer was to bring some sanity to the management of rapidly moving software release targets.

Pre-release metadata is identified by appending a hyphen to the end of the SemVer sequence. Thus a pre-release for version **1.0.0** could be **1.0.0-alpha.1**. Then if another build is needed, it would become **1.0.0-alpha.2**, and so on.

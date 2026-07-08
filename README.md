# Cotecna Material

This project contains the Cotecna Material (comat) library, forked from [Nereo Material](https://github.com/nereolopez/nereo-material) (nm) library, which aims to provide additional [Material Design](https://m3.material.io/components) components that are not availble in Angular Material, at least, at the time of their creation. 

## Installing packages

To install all the required dependencies in a clean and reproducible way, use:
```bash
npm ci --no-audit --no-fund
```
This command installs packages strictly following the lockfile, ensuring consistent environments across machines.

If you encounter issues related to optional dependencies or platform‑specific packages, try:
```bash
npm i --include=optional
```
This will reinstall dependencies while including optional modules that may be required on your system.

## Repository

This repository is divided in two parts: 
- `@cotecna/material` 
- `@cotecna/material/demo`

### `@cotecna/material` 

An Angular library project, which provides additional [Material Design](https://m3.material.io/components) components that are not available in Angular Material, at least, at the time of their creation

### `@cotecna/material/demo`

An Angular Web App, which provides a playfround for testing the library

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `https://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

Note that this library was created as an [Angular 6 CLI Library](https://github.com/angular/angular-cli/wiki/stories-create-library). The library code is located inside of `projects/comat`.


## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Contribute
If you want to contribute, feel free to create Pull Requests or Issues suggesting new components or functionalities on the existing ones.
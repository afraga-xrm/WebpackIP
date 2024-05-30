# LOBLAWS PORTAL SCRIPT

*This repository contains all the client scripts that are loaded on the Loblaws portal website. It uses TypeScript and Webpack to build scripts and export them into a `bundle.js` file. Webpack is configured with plugins to optimize the compilation process for faster builds.*

## How to Run the Project

This project is set up with NPM version 18.18.0. To avoid dependency conflicts, use this version of the package manager. You can install Node Version Manager (nvm) to switch between different Node.js versions if needed.

[Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)

## Development and Production Builds

Run the following commands to build the `bundle.js` file for development (with Fiddler attached) or for production:

```bash
npm run build:dev
npm run build:prod
```

## Project Documentation

**Maintaining up-to-date documentation within this README is crucial for future developers.** 

### Application Structure

#### Entrypoint

- **src/index.ts**: The main entry point of the application. If you create any new TypeScript files, ensure they are exportable and import them as modules inside `index.ts`.

### Folder Structure

#### Forms

- **src/forms/**: Contains scripts related to all the basic forms used in the portal.

#### WebPage

- **src/webpage/**: Contains scripts related to various webpage functionalities.

#### Utils

- **src/utils/**: Provides several generic tools that can be exported and used in any TypeScript file to aid with your logic.

### Contributing

When adding new features or fixing bugs, please:

1. **Document Your Changes**: Update this README with any new information about the structure or functionality of the application.
2. **Follow Existing Conventions**: Maintain consistency in code style and project structure.
3. **Test Thoroughly**: Ensure that your changes do not break existing functionality.

### Contact

For any questions or assistance, please contact the project maintainer or consult the project's issue tracker.

---

By keeping this README updated, you ensure that future developers have the necessary information to effectively work on the project.
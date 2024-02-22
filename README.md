<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>BLACKBAZAR-COMMON</h1>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat-square&logo=npm&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/MrJeyhun/blackbazar-common?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/MrJeyhun/blackbazar-common?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/MrJeyhun/blackbazar-common?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/MrJeyhun/blackbazar-common?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 repository Structure](#-repository-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---



## 📍 Overview

--- https://www.npmjs.com/package/@blackbazar/common

## 📂 Repository Structure

```sh
└── blackbazar-common/
    ├── package-lock.json
    ├── package.json
    ├── src/
    │   ├── errors/
    │   │   ├── bad-request-error.ts
    │   │   ├── custom-error.ts
    │   │   ├── database-connection-error.ts
    │   │   ├── not-authorized.ts
    │   │   ├── not-found-error.ts
    │   │   └── request-validation-error.ts
    │   ├── events/
    │   │   ├── base-listener.ts
    │   │   ├── base-publisher.ts
    │   │   ├── expiration-complete-event.ts
    │   │   ├── order-cancelled-event.ts
    │   │   ├── order-created-event.ts
    │   │   ├── payment-created-event.ts
    │   │   ├── subjects.ts
    │   │   ├── ticket-created-event.ts
    │   │   ├── ticket-updated-event.ts
    │   │   └── types/
    │   ├── index.ts
    │   └── middlewares/
    │       ├── current-user.ts
    │       ├── error-handler.ts
    │       ├── require-auth.ts
    │       └── validate-request.ts
    └── tsconfig.json

```




## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/MrJeyhun/blackbazar-common/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/MrJeyhun/blackbazar-common/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/MrJeyhun/blackbazar-common/issues)**: Submit bugs found or log feature requests for MRJEYHUN.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

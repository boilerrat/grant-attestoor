# Grant Attestoor

## Overview

Grant Attestoor is a decentralized application (dApp) designed to simplify and standardize Web3 grant applications. Built with Next.js, RainbowKit, and wagmi, it aims to be a part of the broader Web3 grant ecosystem.

<!-- Table of Contents -->
## Table of Contents

- [Grant Attestoor](#grant-attestoor)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [TODO/Future Plans](#todofuture-plans)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Development](#development)
  - [Code Structure](#code-structure)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

<!-- Features -->
## Features

- **Grant Application Form**: A comprehensive form to capture all necessary details for a grant application.
- **Data Hashing**: Utilizes keccak256 for hashing form data.
- **Web3 Integration**: Uses RainbowKit for wallet connection.
- **Dynamic Fields**: Allows adding multiple team members, milestones, and social media links.

<!-- todo -->
## TODO/Future Plans

Project is still in its very early MVP stage, with much left to build for UX/UI

- interface with allo
  - Registry.sol
  - custom strategies
- interface with ipfs (application and hash storage and retrieval)
- interface with Hats (needed for custom startegies)
- interface with Ethereum Attestation Service (low priority, allo.sol may provide all verification required)


<!-- Getting Started -->
## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/grant-attestoor.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd grant-attestoor
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

<!-- Usage -->
## Usage

### Development

Run the development server:

```bash
npm run dev
```
Open http://localhost:3000 to view the application in your browser.
Production

To build the application for production, run:

```
npm run build
```
<!-- Code Structure -->
## Code Structure

### Frontend

- `index.tsx`: The main entry point for the application. Handles form data and hashing.
- `forms.tsx`: Contains the `GrantApplicationForm` component and form validation logic.

### Backend

Currently, the application is client-side only and does not have a backend.

<!-- Contributing -->
## Contributing

1. **Fork the Repository**: Fork the original repository to your GitHub account.
2. **Clone Your Fork**: Clone your fork to your local machine.
3. **Create a New Branch**: Create a new branch for your feature or bug fix.
4. **Make Changes**: Make your changes and commit them with a meaningful commit message.
5. **Push Changes**: Push your changes to your fork on GitHub.
6. **Create a Pull Request**: Create a pull request from your fork to the original repository.

For more details, check the `CONTRIBUTING.md` file (if available).

<!-- License -->
## License

This project is licensed under the MIT License. See the `LICENSE.md` file for details.

<!-- Acknowledgments -->
## Acknowledgments

- [RainbowKit](https://rainbowkit.com) for wallet connection.
- [wagmi](https://wagmi.sh) for Ethereum interaction.
- [viem](https://viem.sh) for Typescript Ethereum Interactions
- [Next.js](https://nextjs.org) for the React framework.

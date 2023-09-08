# Contributing to Grant Attestoor

Thank you for your interest in contributing to Grant Attestoor! This document outlines the process for contributing to the project.

## Table of Contents

- [Contributing to Grant Attestoor](#contributing-to-grant-attestoor)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Forking and Installing](#forking-and-installing)
  - [Creating a New Branch](#creating-a-new-branch)
  - [Making Changes](#making-changes)
  - [Creating a Pull Request](#creating-a-pull-request)
  - [Additional Resources](#additional-resources)

## Getting Started

Before you start contributing, it's a good idea to familiarize yourself with the project. You can check out the project issues at [Grant Attestoor Issues](https://github.com/boilerrat/grant-attestoor/issues) or the job board for specific tasks and features that need attention.

## Forking and Installing

1. **Fork the Repository**: Click the "Fork" button at the top-right corner of the [Grant Attestoor GitHub page](https://github.com/boilerrat/grant-attestoor) to fork the original repository to your GitHub account.
2. **Clone Your Fork**: Open your terminal and run the following command to clone your fork to your local machine.

    ```bash
    git clone https://github.com/YOUR_USERNAME/grant-attestoor.git
    ```

3. **Navigate to the Project Directory**:

    ```bash
    cd grant-attestoor
    ```

4. **Install Dependencies**:

    ```bash
    npm install
    ```

## Creating a New Branch

Before making any changes, create a new branch. **Direct commits to the `main` branch are not allowed**.

1. **Create a New Branch**:

    ```bash
    git checkout -b your-branch-name
    ```

## Making Changes

1. **Make Your Changes**: Implement your feature or fix a bug and commit your changes with a meaningful commit message.

    ```bash
    git add .
    git commit -m "Your meaningful commit message"
    ```

2. **Push Changes to Your Fork**:

    ```bash
    git push origin your-branch-name
    ```

## Creating a Pull Request

1. **Navigate to Your Fork on GitHub**: Open your web browser and go to your forked repository.
2. **Create a Pull Request**: Click the "New Pull Request" button and choose the original repository as the base repository and your branch as the compare branch.
3. **Describe Your Changes**: Fill in the pull request template, describing your changes.
4. **Submit the Pull Request**: Click "Create Pull Request".

> **Note**: All checks must pass for Vercel deployment in order for the PR to be merged.

## Additional Resources

- [How to Fork a GitHub Repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [Creating a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

Thank you for contributing to Grant Attestoor!

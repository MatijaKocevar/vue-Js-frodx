# Vue JS Assessment

This Vue project showcases form handling, state management with Pinia, dynamic routing, component composition, and custom directives.
The project is configured with ESLint to maintain code standards. It is built using Vite, which offers fast development cycles and efficient production builds. The project is also configured with Prettier to ensure code formatting consistency.

## Table of Contents

- [Features](#features)
  - [Form Handling](#form-handling)
  - [State Management](#state-management)
  - [Routing](#routing)
  - [Component Composition](#component-composition)
  - [Custom Directives](#custom-directives)
- [Setup and Usage](#setup-and-usage)
  - [Clone the repository](#clone-the-repository)
  - [Navigate to the project directory](#navigate-to-the-project-directory)
  - [Install dependencies](#install-dependencies)
  - [Run the application](#run-the-application)
  - [Build for production (optional)](#build-for-production-optional)

## Features

1. **Form Handling:**

    - A registration form that collects and submits user's contact information including their name, email, and phone number.
    - Client-side validation to ensure all required fields are correctly filled before submission.
    - Mock Api call to simulate different responses to showcase status change

2. **State Management:**

    - Leveraging Pinia for state management, the store contains:
        - Registration status: "Error", "Submitted", and "Not submitted".
        - User's registration details: name, email, and phone number.
        - Error messages for registration failures.
    - Upon form submission:
        - User data is stored in the Pinia store.
        - Registration status updates based on the outcome of the submission.

3. **Routing:**

    - A multi-route Vue application with pages like "forms" and "registration".
    - Navigation between routes.

4. **Component Composition:**

    - Dynamic component that can render different forms using Vue's named slots. This component supports input validation and submission functionality.

5. **Custom Directives:**

    - Developed a custom Vue directive that highlights text within a paragraph when a specific attribute is applied (v-highlight). Can be optionaly set to a color and the highlight will be that color.

## Setup and Usage

1.  **Clone the repository**

    ```bash
    git clone https://github.com/MatijaKocevar/vue-Js-frodx.git
    ```

2.  **Navigate to the project directory**
    ```bash
    cd vue-Js-frodx
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Run the application**
    ```bash
    npm run dev
    ```

5.  **Build for production (optional)**
    ```bash
    npm run build
    ```

## Dependencies

This project has the following dependencies:

- Node.js
- npm
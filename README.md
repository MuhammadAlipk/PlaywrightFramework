# Playwright Framework

## Description  
In this project, I automated login test cases and several shopping scenarios using [Tutorials Ninja Demo](https://tutorialsninja.com/demo). This framework ensures smooth browser automation testing with various e-commerce functionalities.

---

## Prerequisites  
- **Node.js** (v14.x or later) installed. [Download Node.js](https://nodejs.org/)  
- **Git** installed. [Download Git](https://git-scm.com/)  

---

## Installation and Setup  

### Step-by-Step Guide  

1. **Clone the Repository**  
   - Open your terminal/command prompt.  
   - Run the following commands to clone the repository and move into the project folder:
     ```bash
     git clone https://github.com/MuhammadAlipk/PlaywrightFramework.git
     cd PlaywrightFramework
     ```

2. **Install Dependencies**  
   - Run the following command to install all required packages:
     ```bash
     npm install
     ```

3. **Install Playwright Browsers**  
   - Playwright requires specific browsers for testing. Install them using:
     ```bash
     npx playwright install
     ```

---

## How to Run Tests  

1. **Run All Tests**  
   - To run all the test cases in the repository:
     ```bash
     npx playwright test
     ```

2. **Run a Specific Test**  
   - Use the path to a specific test file:
     ```bash
     npx playwright test tests/example.spec.ts
     ```

3. **Run Tests in Headed Mode (Optional)**  
   - Run tests with a visible browser for debugging:
     ```bash
     npx playwright test --headed
     ```

4. **Filter Tests by Name or Pattern**  
   - Use the `--grep` flag to match specific tests:
     ```bash
     npx playwright test --grep "login"
     ```

5. **Generate and View HTML Report**  
   - After the test run, generate and view the HTML report:
     ```bash
     npx playwright show-report
     ```

---




## Folder Structure  
```plaintext
PlaywrightFramework/
│
├── .github/               # GitHub workflows
│   └── workflows/         # CI/CD pipeline workflows
│
├── playwright/            # Playwright-specific configuration and storage
│   └── .auth/             # Authentication storage state
│
├── pages/                 # Page objects for different modules
│
├── setup/                 # One-time setup tasks (like fixtures)
│   └── auth-setup.js      # Global setup tasks
│   └── auth-teatdown.js   # Global Tear Down
├── tests/                 # Main folder containing test cases
├── .env.test              # Test environment variables
├── playwright.config.js   # Playwright configuration file
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Dependency lockfile
└── README.md              # Project documentation
```
## Contributing
Feel free to fork this repository and submit a pull request if you would like to contribute or suggest improvements.

## Happy Testing! 🎯
---




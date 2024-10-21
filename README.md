# Playwright Framework

## Description  
In this project, I automated login test cases and several shopping scenarios using [Tutorials Ninja Demo](https://tutorialsninja.com/demo/). This framework is designed to streamline automated browser testing and ensure smooth workflows for e-commerce functionality. 

---

## Installation and Setup  

### Prerequisites  
- **Node.js** (v14.x or later) installed. [Download Node.js](https://nodejs.org/)  
- **Git** installed. [Download Git](https://git-scm.com/)  

### Step-by-Step Guide  

1. **Clone the Repository**  
   - Open your terminal/command prompt.
   - Run the following command to clone the repository:
     ```bash
     git clone https://github.com/MuhammadAlipk/PlaywrightFramework.git
     cd PlaywrightFramework
     ```

2. **Install Playwright and Dependencies**  
   - Navigate into the project folder if not already there.
   - Run the following command to install the dependencies:
     ```bash
     npm install
     ```

3. **Install Playwright Browsers**  
   - Install the required browsers with the following command:
     ```bash
     npx playwright install
     ```

4. **Run Playwright Tests**  
   - Execute all tests using:
     ```bash
     npx playwright test
     ```

5. **Run Specific Tests**  
   - Use the `--grep` flag to run tests matching a specific name or pattern:
     ```bash
     npx playwright test --grep "login"
     ```

6. **Generate Test Report**  
   - After the test execution, generate an HTML report:
     ```bash
     npx playwright show-report
     ```

7. **View in Headed Mode (Optional)**  
   - If you want to run the tests with a visible browser, use:
     ```bash
     npx playwright test --headed
     ```

---

## Folder Structure  

```plaintext
📂 playwright-framework
├── 📁 tests                # Contains all test cases (e.g., login, shopping scenarios)
│   ├── login.spec.js       # Login test cases
│   └── shopping.spec.js    # Shopping scenario test cases
├── package.json            # Project dependencies and scripts
└── README.md               # Documentation

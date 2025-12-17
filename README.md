\# QA Automation – SauceDemo Login Tests



This repository contains automated end-to-end tests for the \*\*SauceDemo\*\* login functionality, created as part of a \*\*QA Automation Engineer technical challenge\*\*.



The project demonstrates the use of \*\*Playwright with TypeScript\*\*, \*\*Page Object Model (POM)\*\*, and \*\*BDD-style test scenarios\*\*.



---



\## Tech Stack



\- Playwright  

\- TypeScript  

\- Node.js (v20+)  

\- Gherkin (BDD scenarios)



---



\## Project Structure



```text

saucedemo/

├── pages/

│   └── LoginPage.ts

├── tests/

│   └── login.spec.ts

├── playwright.config.ts

├── package.json

├── Gherkin\_Scenarios\_SauceDemo\_Login.pdf

├── Part\_3\_Answers.pdf



```



\## Covered Scenarios



\- Successful login with valid credentials

\- Login attempt with invalid credentials

\- Validation of error messages

\- Verification of successful redirection after login





How to Run the Tests



1\) Install dependencies

```bash

npm install

```

2\) Install Playwright browsers

```bash

npx playwright install

```



3\) Run tests (headless)

```bash

npx playwright test

```



4\) Run tests (headed)

```bash

npx playwright test --headed

```



\## Test Reports



After running tests, an HTML report can be viewed with:

```bash

npx playwright show-report

```



\## Notes



\- The Page Object Model (POM) is used to keep tests clean and maintainable.



\- Playwright’s built-in auto-waiting and assertions (expect) are used instead of hard waits.



\- Gherkin scenarios are provided separately in PDF format to describe test behavior from a user perspective.



\## Part 3 – Theoretical Answers

Answers to the theoretical questions are provided in Part\_3\_Answers.pdf.



\## Author



Yagub Hajiyev


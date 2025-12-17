import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("SauceDemo Login", () => {
  test("Valid login redirects to products page", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText("Products")).toBeVisible();
  });

  test("Invalid login shows error message", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("wrong_user", "wrong_password");

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      "Username and password do not match"
    );
  });
});

const platform = driver.isIOS ? "iOS" : "Android";

describe(`Sauce Labs Demo App [${platform}]`, () => {
  it("should launch the app successfully", async () => {
    const source = await driver.getPageSource();
    expect(source).toBeTruthy();
  });
});
/*   it("should login successfully", async () => {
    // Open menu
    const menuBtn = await driver.$("~View menu");
    await menuBtn.click();

    // Tap "Log In"
    const loginMenuItem = await driver.$("~Log In");
    await loginMenuItem.click();

    // Enter credentials
    const usernameField = await driver.$("~Username input field");
    await usernameField.setValue("bob@example.com");

    const passwordField = await driver.$("~Password input field");
    await passwordField.setValue("10203040");

    // Tap login button
    const loginBtn = await driver.$("~Login button");
    await loginBtn.click();

    // Verify we're back on the products screen
    const productsTitle = await driver.$("~title");
    await productsTitle.waitForDisplayed({timeout: 10000});
    expect(await productsTitle.getText()).toBe("Products");
  });
}); */

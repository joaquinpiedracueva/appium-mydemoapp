const platform = driver.isIOS ? "iOS" : "Android";

describe(`Sauce Labs Demo App [${platform}]`, () => {
  it("should launch the app successfully", async () => {
    const source = await driver.getPageSource();
    expect(source).toBeTruthy();
  });
});

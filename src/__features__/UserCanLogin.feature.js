describe("User attempts to login", () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto("http://localhost:3001");
  });

  beforeEach(async () => {
    await page.reload();
  });

  it("with valid credentials", async () => {
    await page.click("#login");
    await page.type('input[id="email"]', "johndoe@mail.com");
    await page.type('input[id="password"]', "password");
    await page.click('button[id="submit"]');
    await page.waitFor(1000);
    await expect(page).toMatch("Hi johndoe@mail.com");
  });

  it("with invalid credentials", async () => {
    await page.click("#login");
    await page.type('input[id="email"]', "wrongjohndoe@mail.com");
    await page.type('input[id="password"]', "wronpassword");
    await page.click('button[id="submit"]');
    await expect(page).toMatch("Invalid login credentials. Please try again.");
  });
});

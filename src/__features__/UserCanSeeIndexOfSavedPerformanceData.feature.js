require("../__mocks__/mocksConfig");

describe("User attempts to view his/her performance data", () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto("http://localhost:3001");
  });

  beforeEach(async () => {
    await page.reload();
    await page.waitFor(5000);
    await page.click("#login");
    await page.type('input[id="email"]', "johndoe@mail.com");
    await page.type('input[id="password"]', "password");
    await page.click('button[id="submit"]');
    await page.waitFor(1000);
  });

  it("successfully", async () => {
    await page.waitFor(2000);
    await page.click('button[id="show-index"]');
    await page.waitFor(2000);
    await expect(page).toMatch("Below Average");
    await expect(page).toMatch("Average");
    await expect(page).toMatch("Above Average");
  });
});

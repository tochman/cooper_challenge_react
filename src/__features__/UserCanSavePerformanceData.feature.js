require("../__mocks__/mocksConfig");

describe("User attempts save data", () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto("http://localhost:3001");
  });

  beforeEach(async () => {
    await page.reload();
    await page.click("#login");
    await page.type('input[id="email"]', "johndoe@mail.com");
    await page.type('input[id="password"]', "password");
    await page.click('button[id="submit"]');
  });

  it("successfully", async () => {
    await page.type('input[id="distance"]', "1000");
    await page.select('select[id="gender"]', "female");
    await page.type('input[id="age"]', "23");
    await page.click("#save-result");
    await expect(page).toMatch("Your entry was saved");
  });

  it("can save two different entries", async () => {
    await page.type('input[id="distance"]', "1000");
    await page.select('select[id="gender"]', "female");
    await page.type('input[id="age"]', "23");
    await page.click("#save-result");
    await expect(page).toMatch("Your entry was saved");
    await page.type('input[id="distance"]', "1500");
    await page.click("#save-result");
    await expect(page).toMatch("Your entry was saved");
  });
});

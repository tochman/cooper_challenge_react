describe("Cooper Client", async () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3001");
  });

  beforeEach(async () => {
    await page.reload();
    await page.waitFor(5000);
  });

  describe("calculates successfully", async () => {
    beforeEach(async () => {
      await page.type('input[id="distance"]', "1000");
      await page.select('select[id="gender"]', "female");
      await page.type('input[id="age"]', "23");
    });

    it("displays age", async () => {
      await expect(page).toMatch("23 y/o");
    });

    it("displays gender", async () => {
      await expect(page).toMatch("female");
    });

    it("displays distance", async () => {
      await expect(page).toMatch("running 1000 meters");
    });

    it("displays result", async () => {
      await expect(page).toMatch("Result: Poor");
    });
  });
});

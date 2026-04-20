describe("robot.spec.ts", () => {
  it("should navigate to contact us form properly", async () => {
    await browser.url("https://automationexercise.com/");

    await $("//img[@src='/static/images/home/logo.png']").waitForDisplayed();
    await $("//a[@href='/contact_us']").click();

    await $("//h2[contains(., 'Get In Touch')]").waitForDisplayed();

    await $("//input[@name='name']").setValue("Godbless");
    await $("//input[@name='email']").setValue("godbless@gmail.com");
    await $("//input[@name='subject']").setValue("Add to cart");
    await $("//textarea[@name='message']").setValue(
      "having problems adding items to cart",
    );

    // Upload file
    const filePath = await browser.uploadFile(
      "C:\\Users\\ALL AtoZ\\Desktop\\automationClass\\test\\specs\\File\\Document 1 (1).pdf",
    );
    await $("//input[@name='upload_file']").setValue(filePath);

    // Submit
    await $("//input[@name='submit']").click();
   

    await browser.waitUntil(
      async () => {
        try {
          await browser.acceptAlert();
          return true;
        } catch (e) {
          return false;
        }
      },
      { timeout: 5000 },
    );

    //const alertText = await browser.getAlertText();
    // console.log(alertText);

    //await browser.acceptAlert();

    //await $("//div[@class='status alert alert-success']").waitForDisplayed();

    // await $("//a[@class='btn btn-success' and contains(., 'Home')]").click();
    // await $("//img[@src='/static/images/home/logo.png']").waitForDisplayed();
  });
});

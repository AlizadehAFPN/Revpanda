const {device, element, by} = require('detox');

describe('Screen1 and Screen2 E2E Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show an error with an invalid email', async () => {
    await element(by.id('email-input')).typeText(
      'just character without At sign',
    );
    await element(by.id('next-button')).tap();
  });
  it('should navigate to Screen2 with a valid email', async () => {
    await element(by.id('email-input')).clearText();
    await element(by.id('email-input')).replaceText('');
    await element(by.id('email-input')).typeText('valide_mail@example.com');
    await element(by.id('next-button')).tap();
    await expect(element(by.id('screen2-title'))).toBeVisible();
  });
  it('should show an error with an invalid code', async () => {
    await element(by.id('code-input')).typeText('invalid-code');
    await element(by.id('submit-button')).tap();
    await element(by.id('code-input')).clearText();
  });
  it('should submit the code with a valid input', async () => {
    await element(by.id('code-input')).typeText('12345');
    await element(by.id('submit-button')).tap();
  });
});

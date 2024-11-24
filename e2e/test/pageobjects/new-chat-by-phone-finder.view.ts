import BaseView from './base.view.ts';
import { SECOND } from '../../utils/date.ts';

export class NewChatByPhoneFinderView extends BaseView {
  async openCountryCodeSelector() {
    const countrySelector = await driver.$(
      `android=new UiSelector().textContains("+")`,
    );
    await countrySelector.click();
  }

  async searchCounty(country: string) {
    const searchField = await driver.$('//android.widget.EditText');
    await searchField.setValue(country);
  }

  async selectCountyByCode(countyCode: string) {
    const countryCodeOption = await driver.$(
      `//android.widget.TextView[contains(@text, "${countyCode}")]`,
    );
    await countryCodeOption.click();
  }

  async enterPhoneNumber(phoneNumber: string) {
    const phoneNumberField = await driver.$('//android.widget.EditText');
    await phoneNumberField.setValue(phoneNumber);
  }

  async find() {
    const nextButton = await driver.$(
      '//android.view.View[@content-desc="Next"]',
    );
    await nextButton.click();
  }

  async waitProcessing() {
    const loader = await driver.$('//android.widget.ProgressBar');
    await loader.waitForDisplayed({ reverse: true, timeout: 10 * SECOND });
  }
}

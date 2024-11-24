import BaseView from './base.view.ts';

export class NewChatFinderView extends BaseView {
  async findNewChatByPhone() {
    const findNumberListItem = await driver.$(
      `android=new UiSelector().text("Find by phone number")`,
    );
    await findNumberListItem.click();
  }
}

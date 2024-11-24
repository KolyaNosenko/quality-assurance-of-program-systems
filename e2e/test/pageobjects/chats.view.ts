import BaseView from './base.view.ts';

export class ChatsView extends BaseView {
  async open() {
    const chatsTab = await this.getById(
      'org.thoughtcrime.securesms:id/chats_tab_touch_point',
    );
    await chatsTab.click();
  }

  async startNewChat() {
    const newChatElement = await this.getByDescription('New chat');
    await newChatElement.click();
  }

  async openChatWithName(name: string) {
    const chat = await driver.$(`android=new UiSelector().text("${name}")`);
    await chat.click();
  }

  async openSetting() {
    const moreOptions = await driver.$(
      'android=new UiSelector().description("More options")',
    );
    await moreOptions.click();
  }

  async createNewGroup() {
    const newGroupOption = await driver.$(
      'android=new UiSelector().text("New group")',
    );
    await newGroupOption.click();
  }
}

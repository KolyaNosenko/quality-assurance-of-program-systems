import BaseView from './base.view.ts';
import { delay } from '../../utils/delay.ts';
import { SECOND } from '../../utils/date.ts';

export class ChatView extends BaseView {
  async getMessageInput() {
    return driver.$(
      '//android.view.ViewGroup[@resource-id="org.thoughtcrime.securesms:id/conversation_input_panel"]',
    );
  }

  async getMessageWithText(messageText: string) {
    return driver.$(
      `android=new UiSelector().resourceId("org.thoughtcrime.securesms:id/conversation_item_body").text("${messageText}")`,
    );
  }

  async typeNewMessage(messageText: string) {
    const messageField = await driver.$(
      'android=new UiSelector().description("Message composition")',
    );
    await messageField.clearValue();
    await messageField.setValue(messageText);
  }

  async sendMessage() {
    const sendButton = await driver.$(
      'android=new UiSelector().description("Send message")',
    );
    await sendButton.click();
  }

  async waitMessageSending() {
    return delay(2 * SECOND);
  }
}

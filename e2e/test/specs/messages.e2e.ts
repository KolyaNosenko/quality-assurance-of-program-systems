import { faker } from '@faker-js/faker';
import { AppEnvironment, ChatsView, ChatView } from '../pageobjects';
import { config } from '../../config.ts';

describe('Messages', () => {
  let chatsView: ChatsView;
  let chatView: ChatView;
  let appEnvironment: AppEnvironment;

  beforeEach(async () => {
    appEnvironment = new AppEnvironment();
    chatsView = new ChatsView();
    chatView = new ChatView();

    await appEnvironment.reloadApp();
  });

  describe('Send message', () => {
    it('Send simple text message', async () => {
      const newMessageText = faker.word.words();

      await chatsView.open();
      await chatsView.openChatWithName(config.chat.existedName);
      await chatView.typeNewMessage(newMessageText);
      await chatView.sendMessage();
      await chatView.waitMessageSending();

      const newMessage = await chatView.getMessageWithText(newMessageText);
      const isMessageDisplayed = await newMessage.isDisplayed();

      expect(isMessageDisplayed).toBe(true);
    });
  });
});

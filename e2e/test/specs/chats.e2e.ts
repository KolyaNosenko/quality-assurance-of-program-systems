import {
  ChatsView,
  AppEnvironment,
  ChatView,
  NewChatFinderView,
  NewChatByPhoneFinderView,
} from '../pageobjects';
import { config } from '../../config.ts';

describe('Chats', () => {
  let chatsView: ChatsView;
  let chatView: ChatView;
  let newChatFinderView: NewChatFinderView;
  let newChatByPhoneFinderView: NewChatByPhoneFinderView;
  let appEnvironment: AppEnvironment;

  beforeEach(async () => {
    appEnvironment = new AppEnvironment();
    chatsView = new ChatsView();
    chatView = new ChatView();
    newChatFinderView = new NewChatFinderView();
    newChatByPhoneFinderView = new NewChatByPhoneFinderView();

    await appEnvironment.reloadApp();
  });

  describe('Start new chat', async () => {
    it('Find chat by phone number', async () => {
      await chatsView.open();
      await chatsView.startNewChat();

      await newChatFinderView.findNewChatByPhone();

      await newChatByPhoneFinderView.openCountryCodeSelector();
      await newChatByPhoneFinderView.searchCounty('Ukraine');
      await newChatByPhoneFinderView.selectCountyByCode('+380');
      await newChatByPhoneFinderView.enterPhoneNumber(
        config.user.existedPhoneWithoutCode,
      );
      await newChatByPhoneFinderView.find();
      await newChatByPhoneFinderView.waitProcessing();

      const messagingInput = await chatView.getMessageInput();
      const isMessagingAvailable = await messagingInput.isDisplayed();

      expect(isMessagingAvailable).toBe(true);
    });
  });
});

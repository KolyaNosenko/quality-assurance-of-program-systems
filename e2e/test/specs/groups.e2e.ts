import {
  AppEnvironment,
  ChatsView,
  ChatView,
  GroupCreationView,
} from '../pageobjects';
import { faker } from '@faker-js/faker';

describe('Groups', () => {
  let appEnvironment: AppEnvironment;
  let chatsView: ChatsView;
  let chatView: ChatView;
  let groupCreationView: GroupCreationView;

  beforeEach(async () => {
    appEnvironment = new AppEnvironment();
    chatsView = new ChatsView();
    chatView = new ChatView();
    groupCreationView = new GroupCreationView();

    await appEnvironment.reloadApp();
  });

  describe('Create Group', () => {
    it('Create empty group without members', async () => {
      const newGroupName = faker.string.sample();

      await chatsView.open();
      await chatsView.openSetting();
      await chatsView.createNewGroup();

      await groupCreationView.skipMemberChoice();
      await groupCreationView.setGroupName(newGroupName);
      await groupCreationView.createGroup();
      await groupCreationView.waitGroupCreation();
      await groupCreationView.enableLinkSharing();
      await groupCreationView.copyLink();

      const messagingInput = await chatView.getMessageInput();
      const isMessagingAvailable = await messagingInput.isDisplayed();

      expect(isMessagingAvailable).toBe(true);
    });
  });
});

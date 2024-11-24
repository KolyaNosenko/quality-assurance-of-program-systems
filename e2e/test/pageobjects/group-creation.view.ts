import BaseView from './base.view.ts';
import { delay } from '../../utils/delay.ts';
import { SECOND } from '../../utils/date.ts';

export class GroupCreationView extends BaseView {
  async skipMemberChoice() {
    const skipButton = await driver.$(
      'android=new UiSelector().resourceId("org.thoughtcrime.securesms:id/skip")',
    );
    await skipButton.click();
  }

  async setGroupName(groupName: string) {
    const groupNameField = await driver.$(
      'android=new UiSelector().resourceId("org.thoughtcrime.securesms:id/name")',
    );
    await groupNameField.clearValue();
    await groupNameField.setValue(groupName);
  }

  async createGroup() {
    const createButton = await driver.$(
      'android=new UiSelector().text("Create")',
    );
    await createButton.click();
  }

  async waitGroupCreation() {
    await delay(2 * SECOND);
  }

  async enableLinkSharing() {
    const enableLinkControl = await driver.$(
      'android=new UiSelector().resourceId("org.thoughtcrime.securesms:id/group_link_enable_and_share_button")',
    );
    await enableLinkControl.click();
  }

  async copyLink() {
    const copyLinkControl = await driver.$(
      'android=new UiSelector().resourceId("org.thoughtcrime.securesms:id/group_link_bottom_sheet_copy_button")',
    );
    await copyLinkControl.click();
  }
}

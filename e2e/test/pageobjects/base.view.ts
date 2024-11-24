export default class BaseView {
  protected async getById(id: string) {
    return await driver.$(`android=new UiSelector().resourceId("${id}")`);
  }

  protected async getByDescription(description: string) {
    return driver.$(`android=new UiSelector().description("${description}")`);
  }
}

export enum AppState {
  NOT_INSTALLED,
  NOT_RUNNING,
  ON_BACKGROUND_OR_SUSPENDED,
  ON_BACKGROUND,
  ON_FOREGROUND,
}

export class AppEnvironment {
  private readonly appName = 'org.thoughtcrime.securesms';

  async reloadApp() {
    const appState = await this.getAppState();

    if (appState === AppState.NOT_RUNNING) {
      await driver.activateApp(this.appName);
      await driver.reloadSession();
      return;
    }

    await driver.terminateApp(this.appName);
    await driver.activateApp(this.appName);
    await driver.reloadSession();
  }

  async getAppState() {
    return driver.queryAppState(this.appName);
  }
}

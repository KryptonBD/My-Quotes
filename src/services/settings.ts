export class SettingsService {
  private altBackground: boolean;
  setBackground(alt: boolean) {
    this.altBackground = alt;
  }

  isAltBackground() {
    return this.altBackground;
  }
}

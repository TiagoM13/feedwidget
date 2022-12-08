export interface IScreenshotButton {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

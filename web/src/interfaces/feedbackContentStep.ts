import { FeedbackType } from "../components/WidgetForm";

export interface IFeedbackContentStep {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

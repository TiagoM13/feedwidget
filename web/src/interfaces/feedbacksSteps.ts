import { FeedbackType } from "../components/WidgetForm";

export interface IFeedbackSuccessStep {
  onFeedbackRestartRequested: () => void;
}

export interface IFeedbackTypeStep {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

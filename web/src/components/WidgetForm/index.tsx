import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageURL from "../../assets/bug.svg"
import ideaImageURL from "../../assets/idea.svg"
import thoughtImageURL from "../../assets/thought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentSteps";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageURL,
      alt: "Imagem de um insento"
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageURL,
      alt: "Imagem de uma lámpada"
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageURL,
      alt: "Imagem de um balão de pensamneto"
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4  flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer>
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">rocketseat</a>
      </footer>
    </div>
  )
}
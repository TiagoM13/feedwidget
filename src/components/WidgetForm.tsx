import { useState } from "react";

import { CloseButton } from "./CloseButton";

import bugImageURL from "../assets/bug.svg"
import ideaImageURL from "../assets/idea.svg"
import thoughtImageURL from "../assets/thought.svg"

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageURL,
      all: "Imagem de um insento"
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageURL,
      all: "Imagem de uma lámpada"
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageURL,
      all: "Imagem de um balão de pensamneto"
    }
  }
}

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [ feedbackType, setFeedbackType] = useState<FeedbackType | null >(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4  flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-4">Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="flex py-8  gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
            key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2  border-2  border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => setFeedbackType(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.all} />
              <span>{value.title}</span>
            </button>
          )
        }) }
      </div>
      ) : (
        <span>Hello Word</span>
      )}

      <footer>
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">rocketseat</a>
      </footer>
    </div>
  )
}
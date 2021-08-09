import { ReactNode, useState, createContext, useContext } from 'react';

type QuizStateContextMethods = {
  submit: (isCorrect: boolean) => void;
};

type QuizStateContextPropsType = {
  answers: Array<boolean>;
};

type QuizStateContextProps = QuizStateContextMethods & QuizStateContextPropsType;

const QuizStateContext = createContext<Partial<QuizStateContextProps>>({});

function QuizStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuizStateContextPropsType>({
    answers: [],
  });

  const submit = (value: boolean) => {
    const answers = [...state.answers, value];
    setState({
      ...state,
      answers,
    });
  };

  return (
    <QuizStateContext.Provider
      value={{
        ...state,
        submit,
      }}
    >
      {children}
    </QuizStateContext.Provider>
  );
}

const useQuizState = () => useContext(QuizStateContext);

export { QuizStateProvider, useQuizState };

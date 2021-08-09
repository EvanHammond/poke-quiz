import { FC, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Quiz.module.css';
import { Card } from 'src/components/Card';
import { Progress } from 'src/components/Progress';
import { generateGroup } from 'src/utils/quiz';
import { Redirect } from 'react-router-dom';

const cx = classnames.bind(styles);

type QuizProps = Record<string, unknown>;

export const Quiz: FC<QuizProps> = () => {
  const [answers, setAnswers] = useState<Array<boolean>>([]);
  const options: Array<Array<number>> = Array(10).fill(generateGroup());

  if (answers.length === 10) {
    return (
      <Redirect
        to={{
          state: { correct: answers.filter(Boolean).length ?? 0 },
          pathname: '/result',
        }}
      />
    );
  }

  const handleGuess = (correct: boolean) => {
    setAnswers([...answers, correct]);
  };

  return (
    <div className={cx('quiz')}>
      <Progress progress={answers} />
      <Card options={options[answers.length]} handleGuess={handleGuess} />
    </div>
  );
};

Quiz.displayName = 'Quiz';

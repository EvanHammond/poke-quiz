import { FC } from 'react';
import classnames from 'classnames/bind';

import styles from './Quiz.module.css';

const cx = classnames.bind(styles);

type QuizProps = {};

export const Quiz: FC<QuizProps> = () => {
  return <div className={cx('quiz')} />;
};

Quiz.displayName = 'Quiz';

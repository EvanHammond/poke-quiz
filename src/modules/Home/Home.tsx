import { FC } from 'react';
import classnames from 'classnames/bind';

import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

type HomeProps = Record<string, unknown>;

export const Home: FC<HomeProps> = () => {
  return (
    <div className={cx('home')}>
      <div className={cx('homeHero')}>
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-gray-600">Welcome to PokeQuiz!</h1>
          <p className="mb-5 text-gray-600">
            When you press start, you will be asked to identify 10 pokemon based on their picture.
            You will have 5 seconds to answer, the faster you answer, the more points you get!
          </p>
          <Link to="/quiz">
            <button className="btn btn-primary">Start Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Home.displayName = 'Home';

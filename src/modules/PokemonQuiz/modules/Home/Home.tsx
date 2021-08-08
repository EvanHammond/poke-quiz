import { FC } from 'react';
import classnames from 'classnames/bind';

import styles from './Home.module.css';

const cx = classnames.bind(styles);

type HomeProps = {};

export const Home: FC<HomeProps> = () => {
  return (
    <div className={cx('home')}>
      <div className={cx('homeHero')}>
        <div className={cx('max-w-md')}>
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

Home.displayName = 'Home';

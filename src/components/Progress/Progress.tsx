import { FC } from 'react';
import classnames from 'classnames/bind';
import styles from './Progress.module.css';

const cx = classnames.bind(styles);

type ProgressProps = {
  progress: Array<boolean>;
};

export const Progress: FC<ProgressProps> = ({ progress }) => {
  const steps = Array(10)
    .fill('neutral')
    .map((step, i) => {
      if (progress[i] === true) {
        return 'success';
      }
      if (progress[i] === false) {
        return 'error';
      }
      if (i === progress.length) {
        return 'primary';
      }
      return step;
    });

  return (
    <div className={cx('progress')}>
      <ul className="w-full steps text-gray-600">
        {steps.map((q, i) => (
          <li className={`step step-${q}`} key={i}></li>
        ))}
      </ul>
    </div>
  );
};

Progress.displayName = 'Progress';

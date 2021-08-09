import { FC } from 'react';
import classnames from 'classnames/bind';
import styles from './Result.module.css';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';

const cx = classnames.bind(styles);

type ResultProps = Record<string, unknown>;

export const Result: FC<ResultProps & RouteComponentProps<{}, {}, { correct: number }>> = ({
  location,
}) => {
  if (!Number.isInteger(location?.state?.correct)) {
    return <Redirect to="/" />;
  }

  return (
    <div className={cx('result', 'p-8')}>
      <div className="card shadow-md bg-white w-2/3">
        <div className="card-body text-gray-500 text-center">
          <h3 className="card-title">You Scored:</h3>
          <h1 className="text-5xl">{location.state.correct}/10</h1>
          <div className="justify-center card-actions">
            <Link to="/quiz">
              <button className="btn btn-primary">Play Again!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Result.displayName = 'Result';

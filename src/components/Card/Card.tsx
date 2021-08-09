import classnames from 'classnames/bind';
import { FC, useEffect } from 'react';
import { getPokemonById } from 'src/api/pokemon';
import { useQueriesTyped } from 'src/hooks/useQueriesTyped';
import { LoadingSpinner } from '../LoadingSpinner';
import styles from './Card.module.css';

const cx = classnames.bind(styles);

type CardProps = {
  options: Array<number>;
  handleGuess: (correct: boolean) => void;
};

export const Card: FC<CardProps> = ({ options, handleGuess }) => {
  const results = useQueriesTyped(
    options.map((id) => ({
      queryKey: ['pokemon', id],
      queryFn: () => getPokemonById(id),
      enabled: !!options.length,
    }))
  );

  useEffect(() => {
    setTimeout(() => handleGuess(false), 5000);
  }, options);

  if (results.some((r) => r.isLoading)) {
    return <LoadingSpinner />;
  }

  if (results.some((r) => r.error)) {
    return <h1>Error</h1>;
  }

  const match = results[Math.floor(Math.random() * options.length)];

  return (
    <div className={cx('card', 'w-2/3')}>
      <div className="card shadow-md bg-white">
        <figure className="text-center">
          <img
            className="inline-block"
            src={match.data!.sprites.other['official-artwork'].front_default}
          />
        </figure>
        <div className="card-body text-gray-500">
          <ul>
            {results.map((r) => (
              <li className="my-2" key={r.data!.id}>
                <button
                  className="btn btn-outline btn-accent btn-block"
                  onClick={() => handleGuess(match.data!.id === r.data!.id)}
                >
                  {r.data!.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Card.displayName = 'Card';

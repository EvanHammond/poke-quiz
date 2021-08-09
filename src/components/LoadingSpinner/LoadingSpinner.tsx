import React, { FC } from 'react';
import classnames from 'classnames/bind';
import styles from './LoadingSpinner.module.css';

const cx = classnames.bind(styles);

const SvgLoader = React.memo((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 38 38" data-testid="svg-icon" {...props}>
      <defs>
        <linearGradient id="loader_svg__a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
          <stop offset="0%" stopColor="currentColor" stopOpacity={0} />
          <stop offset="63.146%" stopColor="currentColor" stopOpacity={0.631} />
          <stop offset="100%" stopColor="currentColor" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <path stroke="url(#loader_svg__a)" strokeWidth={2} d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            dur="0.9s"
            from="0 18 18"
            repeatCount="indefinite"
            to="360 18 18"
            type="rotate"
          />
        </path>
        <circle cx={36} cy={18} r={1} fill="currentColor">
          <animateTransform
            attributeName="transform"
            dur="0.9s"
            from="0 18 18"
            repeatCount="indefinite"
            to="360 18 18"
            type="rotate"
          />
        </circle>
      </g>
    </svg>
  );
});

type LoadingSpinnerProps = {
  height?: number;
  width?: number;
  block?: boolean;
  className?: string;
};

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  height = 24,
  width = 24,
  className,
  block = false,
}) => {
  return (
    <div className={cx('loadingSpinner', { block }, className)}>
      <div style={{ height, width }}>
        <SvgLoader />
      </div>
    </div>
  );
};

LoadingSpinner.displayName = 'LoadingSpinner';

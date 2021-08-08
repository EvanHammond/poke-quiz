import { FC } from 'react';
import classnames from 'classnames/bind';

import styles from './SiteHeader.module.css';

const cx = classnames.bind(styles);

type SiteHeaderProps = Record<string, unknown>;

export const SiteHeader: FC<SiteHeaderProps> = () => {
  return (
    <div className={cx('siteHeader')}>
      <div className={cx('flex-1', 'px-2', 'mx-2')}>
        <span className={cx('text-lg', 'font-bold')}>Poke Quiz</span>
      </div>
    </div>
  );
};

SiteHeader.displayName = 'SiteHeader';

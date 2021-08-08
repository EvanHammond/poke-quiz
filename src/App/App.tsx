import classnames from 'classnames/bind';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from 'src/modules/PokemonQuiz/modules/Home';
import { SiteHeader } from '../components/SiteHeader';
import styles from './App.module.css';

const cx = classnames.bind(styles);

export function App() {
  return (
    <div className={cx('app')}>
      <SiteHeader />
      <div className={cx('content')}>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

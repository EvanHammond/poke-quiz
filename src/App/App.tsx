import classnames from 'classnames/bind';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from 'src/modules/Home';
import { Quiz } from 'src/modules/Quiz';
import { Result } from 'src/modules/Result';
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
            <Route path="/quiz" component={Quiz} />
            <Route path="/result" component={Result} />
            <Route exact path="/" component={Home} />

            <Route path="*" component={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

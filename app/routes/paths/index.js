import HomePage from '../../containers/HomePage';
import CounterPage from '../../containers/CounterPage';

const productionRoutes = [
  {
    path: '/',
    // layout: HeadshotHomeContainer,
    component: HomePage,
    exact: true
  },
  {
    path: '/counter',
    // layout: HeadshotHomeContainer,
    component: CounterPage,
    exact: true
  }
];

export default productionRoutes;

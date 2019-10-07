import HomeContainer from '../../containers/HomeContainer';
import LoginContainer from '../../containers/LoginContainer';
import ContactsContainer from '../../containers/ContactsContainer';
import DroplrHomeContainer from '../../containers/templates/DroplrHomeContainer';
import DroplrContainer from '../../containers/templates/DroplrContainer';

const productionRoutes = [
  {
    path: '/',
    layout: DroplrHomeContainer,
    component: HomeContainer,
    exact: true
  },
  {
    path: '/login',
    layout: DroplrContainer,
    component: LoginContainer,
    exact: true
  },
  {
    path: '/contacts',
    layout: DroplrHomeContainer,
    component: ContactsContainer,
    exact: true
  }
];

export default productionRoutes;

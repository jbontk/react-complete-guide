import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = ({children}) =>
  <>
    <MainNavigation/>
    <main className={classes.main}>{children}</main>
  </>

export default Layout;
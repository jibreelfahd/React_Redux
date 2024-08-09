import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../store/index";
const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const userLogoutHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={userLogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

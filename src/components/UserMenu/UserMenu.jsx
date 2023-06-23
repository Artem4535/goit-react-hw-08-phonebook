import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { getUserEmail, getUserName } from 'redux/auth/selectors';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  return (
    <>
      <p>{userName}</p>
      <p>{userEmail}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </>
  );
};

export default UserMenu;

import { useUser } from '../userContext';

export const UserMenu = () => {
  const { isLoggedIn, username, logOut, logIn } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>{username}</p>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <button onClick={logIn}>Log In</button>
      )}
    </div>
  );
};

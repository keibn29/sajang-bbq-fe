import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { selectUser } from 'store/authSlice';
import Login from './Login';
import Singup from './Singup';
import { Navigate } from 'react-router-dom';
import { URL } from 'constants/url';

function Auth() {
  const user = useAppSelector(selectUser);
  const [page, setPage] = useState<'login' | 'signup'>('login');

  return (
    <>
      {user?.id ? (
        <Navigate to={URL.home} />
      ) : (
        <div className="h-[100vh] flex justify-center items-center">
          {page === 'login' ? (
            <Login onSignup={() => setPage('signup')} />
          ) : (
            <Singup onLogin={() => setPage('login')} />
          )}
        </div>
      )}
    </>
  );
}

export default Auth;

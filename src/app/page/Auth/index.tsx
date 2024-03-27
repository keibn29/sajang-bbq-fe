import { useAppDispatch, useAppSelector } from 'store';
import { selectUser } from 'store/authSlice';
import { confirmation } from 'utils/app';
import Login from './Login';

function Auth() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Login />
    </div>
  );
}

export default Auth;

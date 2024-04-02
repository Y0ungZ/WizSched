import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button/Button';
import ERRORS from '@/constants/errors';
import useSupabaseAuth from '@/hooks/useSupabaseAuth';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  const { logOutWithGoogle } = useSupabaseAuth();

  const statusCode = error.response.status || 0;
  const errorMessage = ERRORS[statusCode].message;
  const redirectState = ERRORS[statusCode].redirectState;

  const handleLogoutAndRedirect = (path: string) => {
    logOutWithGoogle();
    navigate(`/${path}`);
  };

  return (
    <>
      <p>{errorMessage}</p>
      {redirectState.redirect ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleLogoutAndRedirect(redirectState.path)}
        >
          페이지 이동
        </Button>
      ) : (
        <Button variant="contained" color="error" onClick={resetErrorBoundary}>
          재시도
        </Button>
      )}
    </>
  );
};

export default ErrorFallback;

import googleLogo from '@/assets/image/google-logo.svg';

const LoginPage = () => {
  return (
    <div className="container">
      <button className="hover:bg-google-blue h-10 rounded border border-gray shadow-md hover:text-white ">
        <div className="mx-2">
          <img src={googleLogo} alt="google logo" className="mr-6 inline bg-white" />
          <span>Google 계정으로 로그인</span>
        </div>
      </button>
    </div>
  );
};

export default LoginPage;

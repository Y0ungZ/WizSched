// import googleLogo from '@/assets/image/google-logo.svg';

const LoginPage = () => {
  return (
    <div className="headerMarginContainer bg-black">
      <div className="flex h-4/5 w-9/12 flex-col items-center justify-center rounded bg-white text-center shadow-xl shadow-green">
        <h1 className="my-8 font-accent text-2xl text-navy drop-shadow-md">로그인</h1>
        <p>로그인하고 0Z-board를 이용해보세요.</p>
        <button className="my-8 h-10 rounded border border-gray bg-white shadow-md hover:bg-google-blue hover:text-white ">
          <div className="mx-2">
            <img src={googleLogo} alt="google logo" className="mr-6 inline bg-white" />
            <span>Google 계정으로 로그인</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

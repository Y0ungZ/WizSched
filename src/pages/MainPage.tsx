import Button from '@/components/button/Button';
import UserProfileSection from '@/components/sections/UserProfileSection';
import { useAuthContext } from '@/contexts/AuthProvider';

const MainPage = () => {
  const { user } = useAuthContext();

  return (
    <div className="headerMarginContainer flex-col justify-evenly bg-black">
      <div className="my-4 flex min-h-44 w-9/12 items-center justify-center rounded bg-white text-center shadow-xl shadow-green">
        {user ? <UserProfileSection user={user} /> : <span>로그인이 필요합니다.</span>}
      </div>
      <div className="my-4 h-fit w-9/12 flex-col items-center justify-center rounded bg-white py-4 text-center shadow-xl shadow-green">
        <h2>캘린더</h2>
        <Button variant="contained" color="primary">
          만들기
        </Button>
      </div>
      <div className="my-4 flex-col items-center justify-center text-center">
        <h2 className="textShadowYellow mb-3 font-accent text-2xl text-yellow">반복 일정</h2>
        <Button variant="contained" color="primary">
          만들기
        </Button>
      </div>
    </div>
  );
};

export default MainPage;

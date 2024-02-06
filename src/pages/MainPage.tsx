import UserProfileSection from '@/components/sections/UserProfileSection';
import { useAuthContext } from '@/contexts/AuthProvider';

const MainPage = () => {
  const { user } = useAuthContext();

  return (
    <div className="headerMarginContainer flex-col justify-evenly bg-black">
      <div className="flex min-h-44 w-9/12 items-center justify-center rounded bg-white text-center shadow-xl shadow-green">
        {user ? <UserProfileSection user={user} /> : <span>로그인이 필요합니다.</span>}
      </div>
      <div className="flex min-h-20 w-9/12 items-center justify-center rounded bg-white text-center shadow-xl shadow-green">
        캘린더
      </div>
      <div>
        <h2 className="textShadowYellow font-accent text-2xl text-yellow">반복 이벤트</h2>
      </div>
    </div>
  );
};

export default MainPage;

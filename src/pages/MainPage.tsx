import Button from '@/components/button/Button';
import Calendar from '@/components/calendar/Calendar';
import UserProfileSection from '@/components/section/UserProfileSection';
import DragDropBoard from '@/components/taskboard/DragDropBoard';
import { useAuthContext } from '@/contexts/AuthProvider';

const MainPage = () => {
  const { user } = useAuthContext();

  return (
    <div className="headerMarginContainer flex-col justify-evenly bg-black">
      <div className="my-4 flex min-h-44 w-9/12 items-center justify-center rounded bg-white text-center shadow-xl shadow-green">
        {user ? <UserProfileSection user={user} /> : <span>로그인이 필요합니다.</span>}
      </div>
      <section className="my-4 h-fit w-9/12 flex-col items-center justify-center rounded bg-white py-4 text-center shadow-xl shadow-green">
        <Calendar />
        <Button variant="contained" color="primary">
          만들기
        </Button>
      </section>
      <section className="my-4 h-fit w-9/12 flex-col items-center justify-center rounded bg-white py-4 text-center shadow-xl shadow-green">
        <h2 className="textShadowOrange mb-3 font-accent text-2xl text-red">이번 주 할 일</h2>
        {/* TODO : 로그인 필요하도록 바꿔야 함 */}
        {/* {user ? <DragDropBoard /> : <span>로그인이 필요합니다.</span>} */}
        <DragDropBoard />
      </section>
    </div>
  );
};

export default MainPage;

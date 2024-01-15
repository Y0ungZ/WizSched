import { Link } from 'react-router-dom';
import OutlinedButton from '@/components/button/OutlinedButton';
import { ROUTE_PATH } from '@/constants/path';

const Header = () => {
  return (
    <div className="fixed top-0 z-10 flex h-10v min-h-16 w-full flex-row items-center justify-between bg-gray shadow-md">
      <Link to={ROUTE_PATH.ROOT} aria-label="홈으로 가기">
        <div className="mx-5 cursor-pointer font-accent text-lg font-bold text-white shadow-black drop-shadow-md">
          0Z-board
        </div>
      </Link>
      <div className="mx-5">
        <Link to={ROUTE_PATH.LOGIN}>
          <OutlinedButton text="로그인" />
        </Link>
      </div>
    </div>
  );
};

export default Header;

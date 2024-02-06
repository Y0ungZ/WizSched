import { User } from '@supabase/supabase-js';
import Button from '@/components/button/Button';

const UserProfileSection = ({ user }: UserProfileSectionProps) => {
  return (
    <section className="flex w-full flex-row items-center justify-around">
      <div className="flex flex-col p-4">
        <img
          className="m-auto h-20 w-20 rounded-full"
          src={user.user_metadata.avatar_url ?? ''}
          alt="유저 프로필 사진"
        />
        <div className="mt-2">
          <p className="textShadow font-accent text-lg">
            {user.user_metadata.full_name ?? '이름 없음'}
          </p>
          <p>({user.email ?? '이메일 없음'})</p>
        </div>
      </div>
      <div className="mr-4 flex h-40 flex-col justify-evenly">
        <Button color="primary" variant="outlined">
          주소록 관리
        </Button>
        <Button color="error" variant="outlined">
          일정 분석
        </Button>
      </div>
    </section>
  );
};

interface UserProfileSectionProps {
  user: User;
}

export default UserProfileSection;

import supabase from '@/api/supabaseClient';

const useSupabaseAuth = (): AuthProps => {
  const logInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
  };

  const logOutWithGoogle = async () => {
    await supabase.auth.signOut();
  };

  return { logInWithGoogle, logOutWithGoogle };
};

interface AuthProps {
  logInWithGoogle: () => Promise<void>;
  logOutWithGoogle: () => Promise<void>;
}

export default useSupabaseAuth;

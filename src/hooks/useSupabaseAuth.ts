import supabase from '@/apis/supabaseClient';

const useSupabaseAuth = (): AuthProps => {
  const logInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: process.env.VITE_GOOGLE_CALENDAR_API_SCOPE,
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

import { Session } from '@supabase/supabase-js';
import { useState } from 'react';
import supabase from '@/api/supabaseClient';

const useSupabaseAuth = (): AuthProps => {
  const [user, setUser] = useState<Session | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const logInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    if (data) {
      const { data } = await supabase.auth.getSession();
      setUser(data.session);
    }

    if (error) {
      setError(error);
    }
  };

  return { user, error, logInWithGoogle };
};

interface AuthProps {
  user: Session | null;
  error: Error | null;
  logInWithGoogle: () => Promise<void>;
}

export default useSupabaseAuth;

import { Session, User } from '@supabase/supabase-js';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { setAccessToken } from '@/apis/axiosInstance';
import supabase from '@/apis/supabaseClient';

const AuthContext = createContext<AuthContextProps>({
  user: null,
  session: null,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const listener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        setSession(session);
        setUser(session?.user || null);
        setAccessToken(session?.provider_token || null);
        return;
      }

      if (event === 'SIGNED_OUT') {
        setSession(null);
        setUser(null);
        setAccessToken(null);
        return;
      }
    });

    return () => {
      listener.data.subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    session,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

interface AuthContextProps {
  user: User | null;
  session: Session | null;
}

export default AuthProvider;

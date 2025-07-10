import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MeScheme } from '@/hooks/useMe';
import { UserScheme } from '@/schemas/response/auth/auth.scheme';

interface MeState {
  login: string | undefined;
  authorized: boolean | undefined;
  developer: boolean;
  created: string;
  setMe: (data: UserScheme) => void;
  // fetch: () => Promise<void>;
}

export const useMeStore = create<MeState>()(
  persist(
    (set) => ({
      login: undefined,
      authorized: undefined,
      developer: false,
      created: '',
      setMe: (user) => {
        set(() => ({
          authorized: true,
          login: user.login,
          created: user.created,
          developer: user.developer
        }))
      }
    }
  ),
    {
      name: 'me-storage', 
    }
  )
);
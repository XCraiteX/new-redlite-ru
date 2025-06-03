import { api } from '@/api/api'
import { create } from 'zustand'

interface MeState {
  login: string | undefined | null
  authorized: boolean | undefined
  developer: boolean
  fetch: () => void
}

export const useMeStore = create<MeState>()(set => ({
    login: undefined,
    authorized: undefined,
    developer: false,
    fetch: async () => { 
        const res = await api.get('me') 

        if (res.data.status == 'OK'){
          return set(state => ({...state, authorized: true, login: res.data.login, developer: res.data.developer}))
        }
    }
  })
)
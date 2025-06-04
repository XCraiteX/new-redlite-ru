import { api } from '@/api/api'
import { create } from 'zustand'

interface MeState {
  login: string | undefined | null
  authorized: boolean | undefined
  developer: boolean
  created: string
  fetch: () => void
}

export const useMeStore = create<MeState>()(set => ({
    login: undefined,
    authorized: undefined,
    developer: false,
    created: '',
    fetch: async () => { 
        const data = await api.me()

        if (data.status == 'OK'){
          return set(state => ({...state, authorized: true, login: data.login, developer: data.developer, created: data.created}))
        } else {
          return set(state => ({...state, authorized: false}))
        }
    }
  })
)
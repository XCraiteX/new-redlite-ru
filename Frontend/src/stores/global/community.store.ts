import { api } from '@/api/api'
import { create } from 'zustand'

type CommunityData = {
    telegram_members: number
    discord_members: number
}

interface CommunityState {
  data: CommunityData | undefined
  fetch: () => void
}

export const useCommunityStore = create<CommunityState>()(set => ({
    data: undefined,
    fetch: async () => { 
        const res = await api.get('community') 
        set(state => ({...state, data:{ 
            telegram_members: res.data.telegram, 
            discord_members: res.data.discord
        }}))
    }
  })
)
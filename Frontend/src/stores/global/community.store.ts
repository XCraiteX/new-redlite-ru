import { api } from '@/api/api'
import { CommunityScheme } from '@/schemas/response/global/community.scheme'
import { create } from 'zustand'

type CommunityData = {
    telegram_members: number
}

interface CommunityState {
  data: CommunityData | undefined
  fetch: () => void
}

export const useCommunityStore = create<CommunityState>()(set => ({
    data: undefined,
    fetch: async () => { 
        const result: CommunityScheme = await api.get('community') 
        set(state => ({...state, data:{ 
            telegram_members: result.telegram
        }}))
    }
  })
)
import { create } from 'zustand'

interface AnimationStore {
    isPageVisible: boolean
    setPageVisible: (visible: boolean) => void
}

export const useAnimationStore = create<AnimationStore>((set) => ({
    isPageVisible: true,
    setPageVisible: (visible) => set({ isPageVisible: visible }),
})) 
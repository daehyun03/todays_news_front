import {create} from 'zustand'

interface Page {
    cur: number,
    setCur: (newCur: number) => void
}

export const usePageStore = create<Page>((set) => ({
    cur: 0,
    setCur: (newCur:number) => set({cur: newCur}),
}))
import { create } from 'zustand';
export const useGlobalStore = create((set) => ({
  species: '',
  loading: false,
  data: undefined,
  setData: (data) => set({ data }),
  setSpecies: (species) => set({ species }),
  setLoading: (status) => set({ loading: status })
}));

import { create } from 'zustand';

export const useAnimalStore = create((set) => ({
  animalData: null,
  loading: false,
  setAnimalData: (data) => set({ animalData: data }),
  setLoading: (status) => set({ loading: status })
}));

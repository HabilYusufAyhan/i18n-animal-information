import { create } from 'zustand';

interface GlobalStore {
  species: string;
  loading: boolean;
  data: any; // Eğer data’nın tipi belli ise 'any' yerine onu kullanabilirsin
  setData: (data: any) => void;
  setSpecies: (species: string) => void;
  setLoading: (status: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  species: '',
  loading: false,
  data: undefined,
  setData: (data) => set({ data }),
  setSpecies: (species) => set({ species }),
  setLoading: (status) => set({ loading: status })
}));

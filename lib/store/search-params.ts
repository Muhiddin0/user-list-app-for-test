import { create } from "zustand";

// store type
type Store = {
  params: {
    q: string;
    limit: number;
    skip?: number;
    sortBy?: "firstName" | "lastName" | "maidenName";
    order?: "asc" | "desc";
    debounceEnabled: boolean;
  };
  setParams: (params: Store["params"]) => void;
};

// default store value
export const defaultSearchParamsValues: Store["params"] = {
  q: "",
  limit: 10,
  debounceEnabled: false,
};

// Zustand store
export const useSearchParamsStore = create<Store>()((set) => ({
  params: defaultSearchParamsValues,
  setParams: (params: Store["params"]) => set(() => ({ params: params })),
}));

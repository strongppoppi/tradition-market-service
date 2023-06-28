import { create } from "zustand";

export const useMyLocationStore = create(set => ({
  myLocation: {},
  addMyLocation: (myLocation) => set(() => ({ myLocation: myLocation })),
}));
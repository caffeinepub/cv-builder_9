import { create } from "zustand";

interface TemplateStore {
  selectedTemplate: number;
  setSelectedTemplate: (id: number) => void;
}

export const useTemplateStore = create<TemplateStore>((set) => ({
  selectedTemplate: 1,
  setSelectedTemplate: (id) => set({ selectedTemplate: id }),
}));

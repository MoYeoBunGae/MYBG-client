import { create } from 'zustand';

interface BungaeForm {
  dates: string[];
  endTime: string;
  minAttendees: number;
  maxAttendees: number;
  isOnline: boolean;
  title: string;
  description: string;
}

interface BungaeState {
  step: number;
  form: Partial<BungaeForm>;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateForm: (data: Partial<BungaeForm>) => void;
  resetForm: () => void;
}

export const useBungaeStore = create<BungaeState>((set) => ({
  step: 1,
  form: {},
  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  updateForm: (data) => set((state) => ({ form: { ...state.form, ...data } })),
  resetForm: () => set({ step: 1, form: {} }),
}));

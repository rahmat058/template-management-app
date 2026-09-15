import { create } from "zustand";

interface HistoryState {
  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
}

export const useHistoryStore = create<HistoryState>(() => ({
  canUndo: false,
  canRedo: false,
  undo: () => undefined,
  redo: () => undefined,
}));

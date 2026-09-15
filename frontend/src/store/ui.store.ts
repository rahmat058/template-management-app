import { create } from "zustand";

export type SaveStatus = "idle" | "saving" | "saved" | "error";
export type EditorTool = "select" | "text" | "table" | "image" | "shape";

interface UiState {
  saveStatus: SaveStatus;
  saveMessage: string | null;
  zoom: number;
  activeTool: EditorTool;
  setSaveStatus: (status: SaveStatus, message?: string | null) => void;
  setZoom: (zoom: number) => void;
  setActiveTool: (tool: EditorTool) => void;
}

export const useUiStore = create<UiState>((set) => ({
  saveStatus: "idle",
  saveMessage: null,
  zoom: 0.72,
  activeTool: "select",
  setSaveStatus: (status, message = null) => {
    set({ saveStatus: status, saveMessage: message });
  },
  setZoom: (zoom) => {
    set({ zoom });
  },
  setActiveTool: (tool) => {
    set({ activeTool: tool });
  },
}));

import { create } from 'zustand';

export const useStore = create((set) => ({
    windows: [],
    activeWindowId: null,
    isBooting: true,

    setBooting: (state) => set({ isBooting: state }),

    openWindow: (id, component, title) => set((state) => {
        if (state.windows.find((w) => w.id === id)) {
            // If already open, just focus it and unminimize
            return {
                activeWindowId: id,
                windows: state.windows.map((w) =>
                    w.id === id ? { ...w, isMinimized: false, zIndex: state.windows.length + 1 } : w
                ),
            };
        }
        // Open new window
        const newWindow = {
            id,
            component,
            title,
            isMinimized: false,
            isMaximized: false,
            zIndex: state.windows.length + 1,
        };
        return {
            windows: [...state.windows, newWindow],
            activeWindowId: id,
        };
    }),

    closeWindow: (id) => set((state) => ({
        windows: state.windows.filter((w) => w.id !== id),
        activeWindowId: state.windows.length > 1 && state.activeWindowId === id
            ? state.windows[state.windows.length - 2].id // Focus previous window
            : null,
    })),

    minimizeWindow: (id) => set((state) => ({
        activeWindowId: null, // Deselect when minimizing
        windows: state.windows.map((w) =>
            w.id === id ? { ...w, isMinimized: true } : w
        ),
    })),

    maximizeWindow: (id) => set((state) => ({
        activeWindowId: id,
        windows: state.windows.map((w) =>
            w.id === id ? { ...w, isMaximized: !w.isMaximized, isMinimized: false } : w
        ),
    })),

    focusWindow: (id) => set((state) => {
        // Bring to front by increasing zIndex to max + 1
        // Actually, a better z-index strategy is reordering or just incrementing a global counter. 
        // For simplicity, we can just find the max zIndex and add 1.
        const maxZ = Math.max(0, ...state.windows.map(w => w.zIndex));
        return {
            activeWindowId: id,
            windows: state.windows.map((w) =>
                w.id === id ? { ...w, zIndex: maxZ + 1, isMinimized: false } : w
            ),
        };
    }),

    updateWindowPosition: (id, position) => set((state) => ({
        windows: state.windows.map((w) =>
            w.id === id ? { ...w, position } : w
        )
    }))
}));

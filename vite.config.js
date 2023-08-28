import { defineConfig } from 'vite/config'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    globals: true,
    environmen: 'jsdom',
    setupFiles: 'setupTests',
    mockReset: true,
  },
})

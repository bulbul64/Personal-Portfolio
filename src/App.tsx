// src/App.tsx

import { ThemeProvider } from './components/theme-provider';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;

import { createContext, useMemo, useState } from 'react';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import routes from '@/routes';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  const router = useRoutes(routes);
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark')),
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: true,
        palette: { mode },
      }),
    [mode],
  );

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>{router}</HelmetProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
};

App.whyDidYouRender = true;

export default App;

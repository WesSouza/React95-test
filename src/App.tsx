import { Divider, List, ListItem, styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  ${styleReset}
`;

export function App() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <List>
          <ListItem>🎤 Sing</ListItem>
          <ListItem>💃🏻 Dance</ListItem>
          <Divider />
          <ListItem disabled>😴 Sleep</ListItem>
        </List>
      </ThemeProvider>
    </div>
  );
}

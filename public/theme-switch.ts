import { teamsDarkTheme, teamsLightTheme, webDarkTheme, webLightTheme } from '@fluentui/tokens';
import { brandTheme } from '../src/ThemeProvider/theme';
import { setTheme } from '@fluentui/web-components';

const themes = {
  'web-light': webLightTheme,
  'web-dark': webDarkTheme,
  'teams-light': teamsLightTheme,
  'teams-dark': teamsDarkTheme,
  'delish-theme':brandTheme
};

export function switchTheme(themeName: keyof typeof themes) {
  setTheme(themes[themeName]);
}

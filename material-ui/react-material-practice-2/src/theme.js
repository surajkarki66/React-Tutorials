import { createMuiTheme } from "@material-ui/core/styles";

// this is the process of overriding the default theming of material ui
const theme = createMuiTheme({
  palette: {
    type: "light", //for dark mode
  },
});

export default theme;

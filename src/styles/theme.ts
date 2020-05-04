type HexCode = string;

export interface Theme {
  colours: {
    primary: HexCode;
    secondary: HexCode;
  };
  font: {
    fontFace: string
  }
}

const theme: Theme = {
  colours: {
    primary: "#1300FF",
    secondary: "#FFFF00"
  },
  font: {
    fontFace: "Favorit"
  }
};

export default theme;

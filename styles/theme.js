export const theme = {
  name: "SmallMinds",
  rounding: 2,
  spacing: 20,
  defaultMode: "light",
  global: {
    colors: {
      brand: {
        dark: "#7700cc",
        light: "#6600cc",
      },
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#111111",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: {
        dark: "#444444",
        light: "#CCCCCC",
      },
      control: "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning",
    },
    font: {
      family: "IBM Plex Mono",
      size: "15px",
      height: "20px",
      maxWidth: "300px",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
    control: {
      border: {
        radius: "2px",
      },
    },
    drop: {
      border: {
        radius: "2px",
      },
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "3px",
      large: "10px",
      xlarge: "20px",
    },
    breakpoints: {
      small: {
        value: 640,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "3px",
          large: "5px",
          xlarge: "10px",
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "3px",
          small: "5px",
          medium: "10px",
          large: "20px",
          xlarge: "40px",
        },
        size: {
          xxsmall: "20px",
          xsmall: "40px",
          small: "80px",
          medium: "160px",
          large: "320px",
          xlarge: "640px",
          full: "100%",
        },
      },
      medium: {
        value: 1280,
      },
      large: {},
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "3px",
      xsmall: "5px",
      small: "10px",
      medium: "20px",
      large: "40px",
      xlarge: "80px",
      responsiveBreakpoint: "small",
    },
    input: {
      padding: "10px",
      weight: 600,
    },
    spacing: "20px",
    size: {
      xxsmall: "40px",
      xsmall: "80px",
      small: "160px",
      medium: "320px",
      large: "640px",
      xlarge: "960px",
      xxlarge: "1280px",
      full: "100%",
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  layer: {
    background: {
      dark: "#111111",
      light: "#FFFFFF",
    },
  },
  button: {
    border: {
      width: "2px",
      radius: "2px",
    },
    padding: {
      vertical: "3px",
      horizontal: "18px",
    },
  },
  checkBox: {
    check: {
      radius: "2px",
    },
    toggle: {
      radius: "2px",
      size: "40px",
    },
    size: "20px",
  },
  radioButton: {
    size: "20px",
    check: {
      radius: "2px",
    },
  },
  formField: {
    border: {
      color: "border",
      error: {
        color: {
          dark: "white",
          light: "status-critical",
        },
      },
      position: "inner",
      side: "bottom",
    },
    content: {
      pad: "small",
    },
    disabled: {
      background: {
        color: "status-disabled",
        opacity: "medium",
      },
    },
    error: {
      color: "status-critical",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    help: {
      color: "dark-3",
      margin: {
        start: "small",
      },
    },
    info: {
      color: "text-xweak",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    label: {
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    margin: {
      bottom: "small",
    },
    round: "2px",
  },
  calendar: {
    small: {
      fontSize: "12px",
      lineHeight: 1.375,
      daySize: "22.86px",
    },
    medium: {
      fontSize: "15px",
      lineHeight: 1.45,
      daySize: "45.71px",
    },
    large: {
      fontSize: "24px",
      lineHeight: 1.11,
      daySize: "91.43px",
    },
  },
  clock: {
    analog: {
      hour: {
        width: "7px",
        size: "20px",
      },
      minute: {
        width: "3px",
        size: "10px",
      },
      second: {
        width: "3px",
        size: "8px",
      },
      size: {
        small: "60px",
        medium: "80px",
        large: "120px",
        xlarge: "180px",
        huge: "240px",
      },
    },
    digital: {
      text: {
        xsmall: {
          size: "9px",
          height: 1.5,
        },
        small: {
          size: "12px",
          height: 1.43,
        },
        medium: {
          size: "15px",
          height: 1.375,
        },
        large: {
          size: "18px",
          height: 1.167,
        },
        xlarge: {
          size: "21px",
          height: 1.1875,
        },
        xxlarge: {
          size: "27px",
          height: 1.125,
        },
      },
    },
  },
  heading: {
    level: {
      1: {
        small: {
          size: "27px",
          height: "32px",
          maxWidth: "540px",
        },
        medium: {
          size: "39px",
          height: "44px",
          maxWidth: "780px",
        },
        large: {
          size: "63px",
          height: "68px",
          maxWidth: "1260px",
        },
        xlarge: {
          size: "87px",
          height: "92px",
          maxWidth: "1740px",
        },
      },
      2: {
        small: {
          size: "24px",
          height: "29px",
          maxWidth: "480px",
        },
        medium: {
          size: "33px",
          height: "38px",
          maxWidth: "660px",
        },
        large: {
          size: "42px",
          height: "47px",
          maxWidth: "840px",
        },
        xlarge: {
          size: "51px",
          height: "56px",
          maxWidth: "1020px",
        },
      },
      3: {
        small: {
          size: "21px",
          height: "26px",
          maxWidth: "420px",
        },
        medium: {
          size: "27px",
          height: "32px",
          maxWidth: "540px",
        },
        large: {
          size: "33px",
          height: "38px",
          maxWidth: "660px",
        },
        xlarge: {
          size: "39px",
          height: "44px",
          maxWidth: "780px",
        },
      },
      4: {
        small: {
          size: "18px",
          height: "23px",
          maxWidth: "360px",
        },
        medium: {
          size: "21px",
          height: "26px",
          maxWidth: "420px",
        },
        large: {
          size: "24px",
          height: "29px",
          maxWidth: "480px",
        },
        xlarge: {
          size: "27px",
          height: "32px",
          maxWidth: "540px",
        },
      },
      5: {
        small: {
          size: "14px",
          height: "19px",
          maxWidth: "270px",
        },
        medium: {
          size: "14px",
          height: "19px",
          maxWidth: "270px",
        },
        large: {
          size: "14px",
          height: "19px",
          maxWidth: "270px",
        },
        xlarge: {
          size: "14px",
          height: "19px",
          maxWidth: "270px",
        },
      },
      6: {
        small: {
          size: "12px",
          height: "17px",
          maxWidth: "240px",
        },
        medium: {
          size: "12px",
          height: "17px",
          maxWidth: "240px",
        },
        large: {
          size: "12px",
          height: "17px",
          maxWidth: "240px",
        },
        xlarge: {
          size: "12px",
          height: "17px",
          maxWidth: "240px",
        },
      },
    },
    font: {
      family: "IBM Plex Mono",
    },
  },
  paragraph: {
    small: {
      size: "14px",
      height: "19px",
      maxWidth: "270px",
    },
    medium: {
      size: "15px",
      height: "20px",
      maxWidth: "300px",
    },
    large: {
      size: "18px",
      height: "23px",
      maxWidth: "360px",
    },
    xlarge: {
      size: "21px",
      height: "26px",
      maxWidth: "420px",
    },
    xxlarge: {
      size: "27px",
      height: "32px",
      maxWidth: "540px",
    },
  },
  text: {
    xsmall: {
      size: "12px",
      height: "17px",
      maxWidth: "240px",
    },
    small: {
      size: "14px",
      height: "19px",
      maxWidth: "270px",
    },
    medium: {
      size: "15px",
      height: "20px",
      maxWidth: "300px",
    },
    large: {
      size: "18px",
      height: "23px",
      maxWidth: "360px",
    },
    xlarge: {
      size: "21px",
      height: "26px",
      maxWidth: "420px",
    },
    xxlarge: {
      size: "27px",
      height: "32px",
      maxWidth: "540px",
    },
  },
  scale: 0.9,
};

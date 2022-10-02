const plugin = require("tailwindcss/plugin");

const setting = {
  screen: {
    maxScreenSize: "",
    minScreenSize: "",
  },
  remUnit: "16px",
};

module.exports = plugin(function ({ matchUtilities, theme }) {
  const dynamic = (maxSize) => {
    // min max screen size
    let maxScrSize = theme(
      "tailwindFan.screen.maxScreenSize",
      setting.screen.maxScreenSize
    );
    let minScrSize = theme(
      "tailwindFan.screen.minScreenSize",
      setting.screen.minScreenSize
    );

    if (!maxScrSize && minScrSize) {
      maxScrSize = `calc(${minScrSize}*2)`;
    }
    if (maxScrSize && !minScrSize) {
      minScrSize = `calc(${maxScrSize}/2)`;
    }
    if (!maxScrSize && !minScrSize) {
      maxScrSize = "44rem";
      minScrSize = "30rem";
    }

    //min max font size
    const [mx, mn] = maxSize.split(" ");
    const minFsize = mn || `(${mx}/1.5)`;
    // minimum screen size
    const minScrSizeNum = minScrSize.match(/[^a-zA-Z]/g)?.join("");
    // maximum screen size
    const maxScrSizeNum = maxScrSize.match(/[^a-zA-Z]/g)?.join("");

    // minimum font size
    const minFsizeNum = minFsize.match(/[^a-zA-Z]/g)?.join("");
    // maximum font size
    const sizeNum = mx.match(/[^a-zA-Z]/g)?.join("");

    return `clamp(${minFsize}, calc(${minFsize} + (${sizeNum} - ${minFsizeNum}) * ((100vw - ${minScrSize}) / (${maxScrSizeNum} - ${minScrSizeNum}))),${mx})`;
  };

  function px2rm(str) {
    if (str.includes("px")) {
      const [remUnit, ,] = theme("tailwindFan.remUnit", setting.remUnit).split(
        "px"
      );
      const [dgt, ,] = str.split("px");
      const remDgt = Number(dgt) / remUnit;
      return `${remDgt}rem`;
    }
    return str;
  }

  matchUtilities({
    // pixel to rem

    // px2rm font size
    Rtext: (str) => ({
      fontSize: px2rm(str),
    }),

    // px2rm widht height
    Rw: (str) => ({ width: px2rm(str) }),
    Rh: (str) => ({ height: px2rm(str) }),
    //px2rm margins
    Rm: (str) => ({ margin: px2rm(str) }),
    Rmb: (str) => ({
      marginBottom: px2rm(str),
    }),
    // px2rm marginTop only
    Rmt: (str) => ({
      marginTop: px2rm(str),
    }),
    // px2rm marginLeft only
    Rml: (str) => ({
      marginLeft: px2rm(str),
    }),
    // px2rm marginRight only
    Rmr: (str) => ({
      marginRight: px2rm(str),
    }),
    // px2rm margin Left & Right
    Rmx: (str) => ({
      marginLeft: px2rm(str),
      marginRight: px2rm(str),
    }),
    // px2rm margin top & bottom
    Rmy: (str) => ({
      marginTop: px2rm(str),
      marginBottom: px2rm(str),
    }),

    //px2rm paddings
    Rp: (str) => ({ padding: px2rm(str) }),

    Rpb: (str) => ({
      paddingBottom: px2rm(str),
    }),
    // px2rm paddingTop only
    Rpt: (str) => ({
      paddingTop: px2rm(str),
    }),
    // px2rm paddingLeft only
    Rpl: (str) => ({
      paddingLeft: px2rm(str),
    }),
    // px2rm paddingRight only
    Rpr: (str) => ({
      paddingRight: px2rm(str),
    }),
    // px2rm padding Left & Right
    Rpx: (str) => ({
      paddingLeft: px2rm(str),
      paddingRight: px2rm(str),
    }),
    // px2rm padding top & bottom
    Rpy: (str) => ({
      paddingTop: px2rm(str),
      paddingBottom: px2rm(str),
    }),

    // dynamic width & height
    Dw: (nmbr) => ({ width: dynamic(nmbr) }),
    Dh: (nmbr) => ({ height: dynamic(nmbr) }),
    // dynamic font size
    Dtext: (nmbr) => ({
      fontSize: dynamic(nmbr),
    }),

    // ------------ margin

    // dynamic margin only
    Dm: (nmbr) => ({
      margin: dynamic(nmbr),
    }),

    // dynamic marginBottom only
    Dmb: (nmbr) => ({
      marginBottom: dynamic(nmbr),
    }),
    // dynamic marginTop only
    Dmt: (nmbr) => ({
      marginTop: dynamic(nmbr),
    }),
    // dynamic marginLeft only
    Dml: (nmbr) => ({
      marginLeft: dynamic(nmbr),
    }),
    // dynamic marginRight only
    Dmr: (nmbr) => ({
      marginRight: dynamic(nmbr),
    }),
    // dynamic margin Left & Right
    Dmx: (nmbr) => ({
      marginLeft: dynamic(nmbr),
      marginRight: dynamic(nmbr),
    }),
    // dynamic margin top & bottom
    Dmy: (nmbr) => ({
      marginTop: dynamic(nmbr),
      marginBottom: dynamic(nmbr),
    }),

    // ------------ padding

    // dynamic padding only
    Dp: (nmbr) => ({
      padding: dynamic(nmbr),
    }),

    // dynamic paddingBottom only
    Dpb: (nmbr) => ({
      paddingBottom: dynamic(nmbr),
    }),
    // dynamic paddingTop only
    Dpt: (nmbr) => ({
      paddingTop: dynamic(nmbr),
    }),
    // dynamic paddingLeft only
    Dpl: (nmbr) => ({
      paddingLeft: dynamic(nmbr),
    }),
    // dynamic paddingRight only
    Dpr: (nmbr) => ({
      paddingRight: dynamic(nmbr),
    }),
    // dynamic padding Left & Right
    Dpx: (nmbr) => ({
      paddingLeft: dynamic(nmbr),
      paddingRight: dynamic(nmbr),
    }),
    // dynamic padding top & bottom
    Dpy: (nmbr) => ({
      paddingTop: dynamic(nmbr),
      paddingBottom: dynamic(nmbr),
    }),
  });
});

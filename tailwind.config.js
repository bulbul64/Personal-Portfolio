module.exports = {
  theme: {
    extend: {
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 15s linear infinite",
      },
    },
  },
};
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "rotate-colors": {
          "0%": { transform: "rotate(0deg)", "background-position": "0% 50%" },
          "50%": {
            transform: "rotate(180deg)",
            "background-position": "100% 50%",
          },
          "100%": {
            transform: "rotate(360deg)",
            "background-position": "0% 50%",
          },
        },
      },
      animation: {
        "rotate-colors": "rotate-colors 20s linear infinite",
      },
    },
  },
};

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)"
        },
        secondary: {
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)"
        },
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)"
        },
      },
      fontFamily: {
        'sans': "var(--font-family-sans)",
      },
      spacing: {
        "7": "1.75rem",
        "9": "2.25rem",
        "11": "2.75rem",
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "23": "5.75rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "27": "6.75rem",
        "28": "7rem",
        "29": "7.25rem",
        "30": "7.5rem",
        "31": "7.75rem",
        "33": "8.25rem",
        "34": "8.5rem",
        "35": "8.75rem",
        "36": "9rem",
        "37": "9.25rem",
        "38": "9.5rem",
        "39": "9.75rem",
        "41": "10.25rem",
        "42": "10.5rem",
        "43": "10.75rem",
        "44": "11rem",
        "45": "11.25rem",
        "46": "11.5rem",
        "47": "11.75rem",
        "49": "12.25rem",
        "50": "12.5rem",
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      fontSize: {
        'tiny': '.625rem',
      },
      boxShadow: {
        outline: '0 0 0 2px rgba(96, 37, 192, 0.4)',
      },
      screens: {
        '2xl': '1824px',
        // => @media (min-width: 1824px) { ... }
      }
    }
  },
  purge: {
    content: ["./app/**/*.html.erb", "./app/**/*.res"],
    options: {
      whitelistPatterns: [/^bg-/, /^text-/, /^border-/, /^hover:/],
    },
  }
};

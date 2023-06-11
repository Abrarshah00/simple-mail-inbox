import { mergeTheme, defaultTheme } from 'evergreen-ui';

const theme = mergeTheme(defaultTheme, {
  components: {
    TextInputField: {
      baseStyle: { fontSize: '14px', padding: '18px' },
    },
    Button: {
      baseStyle: { fontWeight: 'bold' },
      appearances: {
        superdanger: {
          color: 'white',
          paddingX: 12,
          paddingY: 8,
          borderRadius: 5,
          backgroundColor: '#D14343',
          _hover: {
            backgroundColor: 'firebrick',
          },
          _active: {
            backgroundColor: 'darkred',
          },
          _focus: {
            boxShadow: '0 0 0 2px lightcoral',
          },
        },
        superSuccess: {
          color: 'white',
          paddingX: 12,
          paddingY: 8,
          borderRadius: 5,
          backgroundColor: '#3DAC16',
          _hover: {
            backgroundColor: '#52BD95',
          },
          _active: {
            backgroundColor: '#52BD95',
          },
          _focus: {
            boxShadow: '0 0 0 2px lightcoral',
          },
        },
        superGreen: {
          color: 'white',
          paddingX: 12,
          paddingY: 8,
          borderRadius: 5,
          backgroundColor: '#1E7627',
        },

        secondary: {
          color: 'white',
          paddingX: 12,
          paddingY: 8,
          borderRadius: 5,
          backgroundColor: '#670EAB',
          _hover: {
            backgroundColor: '#6E62B6',
          },
          _active: {
            backgroundColor: '#6E62B6',
          },
          _focus: {
            boxShadow: '0 0 0 2px gray',
          },
        },
        warning: {
          color: 'white',
          paddingX: 12,
          paddingY: 8,
          borderRadius: 5,
          backgroundColor: '#FF7E03',
          _hover: {
            backgroundColor: '#f3973f',
          },
          _active: {
            backgroundColor: '#FF7E03',
          },
          _focus: {
            boxShadow: '0 0 0 2px lightcoral',
          },
        },
        redminimal: {
          color: '#D14343',
          paddingX: 12,
          paddingY: 8,
          borderColor: '#D14343',
          borderRadius: 5,
          backgroundColor: 'transparent',
        },
        blueminimal: {
          color: '#163BAC',
          paddingX: 12,
          paddingY: 8,
          borderColor: '#163BAC',
          borderRadius: 5,
          backgroundColor: 'transparent',
        },
      },
    },
    TableHead: {
      baseStyle: {
        backgroundColor: '#163BAC',
        color: 'white',
        // fontSize: '16px',
      },
    },
    TableCell: { baseStyle: { fontSize: '12px' } },
  },
  fontFamilies: {
    display: '"Poppins", sans-serif',
    ui: '"Poppins", sans-serif',
    mono: '"Poppins", sans-serif',
  },
});

export default theme;

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import { fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 240;
const fontFamily = "'Clarkson',Helvetica,sans-serif";

export const Color = {
  white: 'white',
  black: 'black'
};

export const materialStyles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  typography: {
    fontFamily,
    textTransform: 'none',
    color: theme.palette.white.main
  },
  buttonIcon: {
    margin: 0
  },
  brandImage: {
    height: 40
  },
  rootAutoScroll: {
    overflow: 'auto'
  },
  brandTitle: {
    paddingLeft: '40px',
    paddingRight: '8px',
    color: theme.palette.white.main,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingTop: '3px',
    textTransform: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: '18px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    }
  },
  searchIconContainer: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIcon: {
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  },
  selectedButton: {
    display: 'block!important',
    width: '100%',
    borderRadius: '13px!important'
  },
  selectedButtonTitle: {
    color: theme.button.primaryColor,
    fontSize: theme.button.primaryFontSize,
    fontWeight: 600,
    paddingTop: '0.8rem',
    paddingBottom: '0.8rem',
    lineHeight: 1.3,
    textTransform: 'none'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 190,
    width: '100%',
    backgroundColor: theme.palette.white.main,
    borderRadius: 7
  },
  flatPrimary: {
    color: theme.palette.white.main
  },
  grow: {
    flexGrow: 1
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  groupMenuItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },
  input: {
    display: 'none'
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800]
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuitem: {
    color: theme.palette.white.main
  },
  menuItemText: {
    color: theme.palette.white.main,
    fontSize: '0.85rem',
    fontWeight: 400,
    paddingTop: '3px',
    textTransform: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: '10px'
  },
  drawerMenuButton: {
    marginLeft: 12,
    marginRight: 20,
    color: '#FFF'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  drawerBandImage: {
    paddingTop: '0.3rem',
    width: '100px',
    textAlign: 'left',
    marginLeft: '10px',
    marginRight: 'auto'
  },
  appBar: {
    width: '100%',
    position: 'absolute',
    paddingRight: 0,
    paddingLeft: 0
  },
  topbarMenuItemTitle: {
    paddingLeft: '8px',
    paddingRight: '8px',
    '&:hover': {
      color: theme.palette.grey.light
    }
  },
  topbarDynamicShow: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  topbarMenuItem: {
    display: 'inline-block'
  },
  avatarImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  avatarMenuItemText: {
    color: theme.palette.white.main,
    fontSize: '1rem',
    fontWeight: 400,
    paddingLeft: '7px'
  },
  optionMenuItem: {
    backgroundColor: 'rgba(0, 0, 0, 0)!important',
    paddingLeft: '40px'
  },
  slide: {
    padding: 10
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  h4NoMargin: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '2.125rem',
    fontFamily,
    fontWeight: 400,
    lineHeight: 1.17,
    letterSpacing: '0.00735em',
    marginBlockStart: '0em',
    marginBlockEnd: '0em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px'
  },
  h4SmallMargin: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '2.125rem',
    fontFamily,
    fontWeight: 400,
    lineHeight: 1.17,
    letterSpacing: '0.00735em',
    marginBlockStart: '0.5em',
    marginBlockEnd: '0.5em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px'
  },
  h4: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '2.125rem',
    fontFamily,
    fontWeight: 400,
    lineHeight: 1.17,
    letterSpacing: '0.00735em',
    marginBlockStart: '1.33em',
    marginBlockEnd: '1.33em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px'
  },
  h5: {
    display: 'block',
    fontSize: '0.83em',
    marginBlockStart: '1.67em',
    marginBlockEnd: '1.67em',
    marginInlineEtart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  underlineText: {
    textDecoration: 'underline',
    display: 'inline',
    fontSize: '1rem'
  },
  boldText: {
    fontWeight: 600,
    display: 'inline',
    fontSize: '1rem',
    fontFamily,
    lineHeight: '1.46429em'
  },
  boldUnderlineText: {
    fontWeight: 600,
    textDecoration: 'underline',
    display: 'inline',
    fontSize: '1rem',
    lineHeight: '1.46429em'
  },
  fontLightWeight: {
    fontWeight: 100
  },
  fontMiddleWeight: {
    fontWeight: 400
  },
  italicText: {
    fontStyle: 'italic'
  },
  inlineText: {
    display: 'inline'
  },
  centerText: {
    textAlign: 'center'
  },
  leftText: {
    textAlign: 'left'
  },
  rightText: {
    textAlign: 'right'
  },
  fullWidth: {
    width: '100%'
  },
  bold: {
    fontWeight: 600
  },
  red: {
    color: theme.palette.red.main
  },
  white: {
    color: theme.palette.white.main
  },
  whiteImportant: {
    color: '#CCC !important'
  },
  black: {
    color: theme.palette.black.main
  },
  blue: {
    color: theme.palette.blue.main
  },
  green: {
    color: theme.palette.green.main
  },
  containerPaper: {
    padding: 20
  },
  nextButton: {
    margin: theme.spacing.unit
  },
  generalLink: {
    textDecorationLine: 'none'
  },
  swipeableGridContainer: {
    width: '100%',
    background: '#FFF',
    minWidth: 200,
    padding: '32px 16px !important',
    borderRadius: 16,
    marginTop: 16
  },
  loadingProgress: {
    color: '#6798e5',
    animationDuration: '550ms'
  },
  noMargin: {
    margin: 0
  },
  colorBlack: {
    color: theme.palette.black.main
  },
  customizeTitle: {
    fontSize: 20
  },
  customizeDescription: {
    fontSize: 12
  },
  customizeTextLabel: {
    fontSize: 14
  },
  flexContainer: {
    display: 'flex',
    minHeight: 56
  },
  descriptionContainer: {
    padding: 20
  },
  formTextControl: {
    minWidth: 'initial'
  },
  colorCustomizeTitle: {
    alignSelf: 'center',
    color: '#218fff',
    fontSize: 14,
    '& > label': {
      marginLeft: 0
    }
  },
  alignItemCenter: {
    alignItems: 'center'
  },
  colorTitle: {
    color: '#4e321f'
  },

  loginPaper: {
    padding: 20
  },
  card: {
    minWidth: 275
  },
  droplrContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignCtems: 'center'
  }
});

export const themeMaterial = createMuiTheme({
  palette: {
    primary: {
      main: '#7e57c2',
      light: grey[400]
    },
    secondary: {
      main: '#C00'
    },
    green: {
      main: '#28a745'
    },
    teal: {
      main: '#20c997'
    },
    white: {
      main: '#FFFFFF',
      light: grey[100],
      dark: grey[300],
      thin: '#d6d7d8',
      contrastText: '#fff'
    },
    black: {
      main: grey[900],
      dark: grey[800],
      thin: grey[700],
      light: grey[600]
    },
    grey: {
      main: grey[900],
      dark: grey[800],
      light: grey[400],
      thin: grey[200]
    },
    darkGrey: {
      main: grey[800]
    },
    lightGrey: {
      main: grey[400]
    },
    red: {
      main: '#C00',
      thin: red[400],
      light: red[400],
      dark: red[900]
    },
    blue: {
      main: blue[700],
      light: blue[400],
      dark: blue[900]
    }
  },
  '@global': {
    body: {
      overflow: 'auto',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
  },
  typography: {
    fontFamily,
    textTransform: 'none',
    useNextVariants: true,
    color: '#FFFFFF'
  },
  button: {
    primaryColor: '#000000',
    primaryFontSize: '1.5rem'
  }
});

export default materialStyles;

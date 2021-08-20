import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import { mainListItems } from './listItems';
import Map  from './components/map/Map1';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
const location = {
    lat: 13.237427429986727,
    lng: 75.17831168101472,
  }
const markers=[
{lat: 13.237427429986727, lng: 75.17831168101472},
{lat: 13.237027048053541, lng: 75.178080838913},
{lat: 13.236956127573029, lng: 75.17802598249897},
{lat: 13.236029411797205, lng: 75.1768999615639},
{lat: 13.235922613451873, lng: 75.17673710658472},
{lat: 13.23577993745902, lng: 75.17650996672812},
{lat: 13.235650208083532, lng: 75.17623759916569},
{lat: 13.235572612293685, lng: 75.17610731517196},
{lat: 13.235458304469674, lng: 75.17597703118251},
{lat: 13.23527891617671, lng: 75.17586903261738},
{lat: 13.235044459643468, lng: 75.17578760512241},
{lat: 13.234791646832667, lng: 75.17576703396429},
{lat: 13.234515471487304, lng: 75.17576789109576},
{lat: 13.23432607008217, lng: 75.17580560488248},
{lat: 13.234119981161278, lng: 75.17587588966605},
{lat: 13.234040650475047, lng: 75.17587879338807},
{lat: 13.233868836129588, lng: 75.17591788910991},
{lat: 13.233616856469359, lng: 75.17593160321377},
{lat: 13.233432460590144, lng: 75.17589817508477},
{lat: 13.233230542774509, lng: 75.17585103285138},
{lat: 13.23296854998534, lng: 75.17577474814769},
{lat: 13.232644813285235, lng: 75.17570789189129},
{lat: 13.232533007206891, lng: 75.17569246352424},
{lat: 13.232285198043147, lng: 75.17567103523751},
{lat: 13.232230129300875, lng: 75.17567103523749},
{lat: 13.232058248007645, lng: 75.17563674997876},
{lat: 13.231942269783932, lng: 75.17557332224459},
{lat: 13.23185549467621, lng: 75.17547732352003},
{lat: 13.231681109987598, lng: 75.17524418374725},
{lat: 13.231529513097303, lng: 75.17503046464478},
{lat: 13.230459839032067, lng: 75.17384076611546},
{lat: 13.23031215355245, lng: 75.17370791073228},
{lat: 13.230054329537667, lng: 75.17350991335209},
{lat: 13.229926669004453, lng: 75.17339762912961},
{lat: 13.229659666360547, lng: 75.17328277350416},
{lat: 13.229357619267068, lng: 75.17318334624832},
{lat: 13.22912566019424, lng: 75.17315334664502},
{lat: 13.229000502332488, lng: 75.17315248951355},
{lat: 13.228960451797068, lng: 75.17315591804135},
{lat: 13.228568290014774, lng: 75.17330334465993},
{lat: 13.228241209912113, lng: 75.17339934338607},
{lat: 13.2281544334789, lng: 75.17343362864611},
{lat: 13.227886594509274, lng: 75.17350391342642},
{lat: 13.22774558259194, lng: 75.17358534092095},
{lat: 13.227637111834625, lng: 75.17367791111963},
{lat: 13.227479411951089, lng: 75.17391362227947},
{lat: 13.227228260074247, lng: 75.17448447187077},
{lat: 13.227061381608484, lng: 75.17480761044433},
]  
const markers1=[
{lat: 13.224559104069446, lng: 75.31623513670458},
{lat: 13.225141192271645, lng: 75.31627891247764},
{lat: 13.22711058325138, lng: 75.31617044401976},
{lat: 13.228585480913933, lng: 75.31668181674928},
{lat: 13.229354521077914, lng: 75.31759044025694},
{lat: 13.229813083979293, lng: 75.31981368432668},
{lat: 13.22970454112566, lng: 75.32055149612347},
{lat: 13.229699936702014, lng: 75.32045129566491} 
]
const river_locations={}
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  overlaymenubar:{
    paddingLeft:24,
    paddingTop:24,
  },
  overlaymenuhidden:{
    display:'none',
  },
  overlaypaper:{
    zIndex: theme.zIndex.tooltip + 5,
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    zIndex: theme.zIndex.tooltip + 1,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 800,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [overlay, setOverlay] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOverlayOpen = () => {
    setOverlay(true);
    console.log(overlay)
  };
  const handleOverlayClose = () => {
    setOverlay(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Pollution Index Map
          </Typography>
          <IconButton color="inherit"
          onClick={handleOverlayOpen}
          className={clsx(classes.overlaymenubar,overlay && classes.overlaymenuhidden)}
          >
              <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12} lg={12}>
            
              <div style ={{
                position:'relative',
                height:600,
                zIndex:1502
              }}>
              <Paper className={fixedHeightPaper}>
              <Map location={location} zoomLevel={16} river_locations={river_locations} markers={markers} markers1={markers1}/>
              </Paper>
              </div>
        {/*      <div style={{
                position:'relative',
                top:'-80%',
                height:0,
                zIndex:1503
              }}>
                <Paper className={clsx(classes.fixedHeightPaper,classes.overlaypaper,!overlay && classes.overlaymenuhidden)}>
                <IconButton color="inherit"
          onClick={handleOverlayClose}
          className={clsx(classes.overlaymenubar,!overlay && classes.overlaymenuhidden)}
          >
              <CloseIcon />
          </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                .hey .
              </Typography>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                 . yea . 
              </Typography>
        {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid> *
              </Paper>
            </div>*/}
            </Grid>
          </Grid>             
        </Container>
      </main>
    </div>
  );
}
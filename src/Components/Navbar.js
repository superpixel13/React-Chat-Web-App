import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Chat from './Chat';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Navbar = () => {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Chat Go
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
          
            <div className={classes.drawerHeader}>
            <h3> Pick a Chat Room</h3>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
                
              </IconButton>
            </div>
            
            <Divider />
            <List >
              {[
                {
                  path: "/",
                  name: "Homepage",
                },
                {
                  path: "/Shielder",
                  name: "Shielder",
                },
                {
                  path: "/Saber",
                  name: "Saber",
                },
                {
                  path: "/Archer",
                  name: "Archer",
                },
                {
                  path: "/Lancer",
                  name: "Lancer",
                },
                {
                  path: "/Rider",
                  name: "Rider",
                },
                {
                  path: "/Caster",
                  name: "Caster",
                },
                {
                  path: "/Assassin",
                  name: "Assassin",
                },
                {
                  path: "/Berserker",
                  name: "Berserker",
                },
                {
                  path: "/Ruler",
                  name: "Ruler",
                },
                {
                  path: "/Avenger",
                  name: "Avenger",
                },
                {
                  path: "/Moon Cancer",
                  name: "Moon Cancer",
                },
                {
                  path: "/Alter Ego",
                  name: "Alter Ego",
                },
                {
                  path: "/Beast",
                  name: "Beast",
                },
              ].map((text, index) => (
                <Link style={{ textDecoration: "none", textAlign:"center" }} to={text.path}>
                  <ListItem button key={index}>
                    <ListItemText style={{textAlign:"center"}} primary={text.name} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </div>
        <Switch>
          <Route path="/:id" exact component={Chat} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    );
}

const Homepage = () =>{
  return (
    <div style={{ paddingTop: "50px", textAlign: "center" }}>
      <h1>Welcome to Chat Go</h1>
      <p>Click on the menu on the top left side to show all the Chat Group Available</p>
    </div>
  );
}
export default Navbar

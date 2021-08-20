import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="HOME" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="WQI" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="WPI" />
    </ListItem>
    {/* <ListItem button>
      <ListItemText primary="Reports" />
    </ListItem> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
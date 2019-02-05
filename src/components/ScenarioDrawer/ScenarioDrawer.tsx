import * as React from 'react';

import { IScenario } from '../../interfaces';

import { createStyles, withStyles, WithStyles} from '@material-ui/core';

import { Theme } from '@material-ui/core/styles/createMuiTheme';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Add } from '@material-ui/icons';

const drawerWidth = 250;

const styles = (theme: Theme) => createStyles(
    {
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            zIndex: 1099,
          },
          drawerPaper: {
            width: drawerWidth,
          },
          content: {
            flexGrow: 1,
            padding: theme.spacing.unit * 3,
          },
          toolbar: theme.mixins.toolbar,
    }
)

interface IScenarioDrawerProps extends WithStyles<typeof styles> {
    scenarios?: IScenario[];
    className?: string;
    selectScenario: (index: number) => void;
    addNewScenario: () => void;
}

class ScenarioDrawer extends React.Component <IScenarioDrawerProps ,{}> {

    public handleCreateNewScenario() {
        this.props.addNewScenario();
    }

    public handleSelectScenario(index: number) {
        this.props.selectScenario(index);
    }

    public render(){
        return (
                <Drawer variant="permanent"
                    className={this.props.classes.drawer}
                    classes={{
                        paper: this.props.classes.drawerPaper,
                    }}>
                    <div className={this.props.classes.toolbar} />
                    <List>
                        <ListItem>
                            <ListItemText primary={'Scenarios'} />
                        </ListItem>
                        <ListItem button={true} onClick={() => this.handleCreateNewScenario()}>
                            <ListItemIcon><Add /></ListItemIcon>
                            <ListItemText primary={'Create New Scenario'} />
                        </ListItem>
                        <Divider />
                        { (this.props.scenarios || []).map((scenario, index) => {
                            return(
                            <ListItem key={index} button={true} onClick={() => this.handleSelectScenario(index)}>
                                <ListItemText primary={scenario.name} />
                                <Divider />
                            </ListItem>
                            );
                        })}
                    </List>
                </Drawer>
        )
    }
}

const DecoratedScenarioDrawer = withStyles(styles)(ScenarioDrawer);



export default DecoratedScenarioDrawer;
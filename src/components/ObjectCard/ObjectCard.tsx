
import * as React from 'react';

import "./ObjectCard.css";

import { ISmartObject } from 'src/interfaces';

// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import Typography from '@material-ui/core/Typography';

// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface IObjectCardProps {
    smartObject: ISmartObject;
    category: string;

}


class ObjectCard extends React.Component<IObjectCardProps, {}>  {

    public render() {
        return (
            <div className="ObjectCardContainer">
                    <div className="ObjectCardItem">
                        {this.props.smartObject.name}
                    </div>
                    <div className="ObjectCardItem">
                        {this.props.category}
                    </div>
                    <div className="ObjectCardItem">
                        <ul>{this.props.smartObject.ip}</ul>
                        <ul>{this.props.smartObject.port}</ul>
                    </div>

                {/* <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Expansion Panel 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel> */}
            </div>
        );
    }
}

export { ObjectCard };

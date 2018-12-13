import * as React from 'react';
import "./Notification.css";

import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';

import ErrorIcon from '@material-ui/icons/Error';


interface INotificationProps {
    message: string;
};

interface INotificationState {
    open: boolean;
}

export class Notification extends React.Component<INotificationProps, INotificationState> {

  constructor(props: INotificationProps){
      super(props);
      this.state = {open: true};
  }

  public handleClose() {
      this.setState({open: false});
  }

  public render() {
    return (
        <Snackbar
            anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
            }}
            open={this.state.open}
            autoHideDuration={4000}
            onClose={() => this.handleClose()}
            >
                <SnackbarContent
                    className="RegisterPage-SnackBarContent"
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar">
                            <ErrorIcon/>
                            {this.props.message}
                        </span>
                    }
                    action={[
                        <IconButton
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => this.handleClose()}
                        >
                          <CloseIcon />
                        </IconButton>,
                      ]}
                />
        </Snackbar>
    );
  }
}

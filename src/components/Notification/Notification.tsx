import * as React from 'react';
// import "./Notification.css";

import { Style } from './Notification.style';

import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';

import ErrorIcon from '@material-ui/icons/Error';
import styled from 'styled-components';


interface INotificationProps {
    message: string;
    className?: string;
};

interface INotificationState {
    open: boolean;
}

class Notification extends React.Component<INotificationProps, INotificationState> {

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
            className={this.props.className}
            anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
            }}
            open={this.state.open}
            autoHideDuration={4000}
            onClose={() => this.handleClose()}
            >
                <SnackbarContent
                    className="Notification-SnackBarContent"
                    aria-describedby="client-snackbar"
                    message={
                        <Style.textNotification id="client-snackbar">
                            <ErrorIcon/>
                            {this.props.message}
                        </Style.textNotification>
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

export default styled(Notification)`${Style.NotificationStyle}`
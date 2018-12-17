

import * as React from 'react';
import styled from 'styled-components';

import { Styled } from './Header.style';

import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';

// import ErrorIcon from '@material-ui/icons/Error';
// import MenuIcon from '@material-ui/icons/Menu';


interface IHeaderState {
    open: boolean;
    anchorEl: any;
}

interface IHeaderProps {
    className?: string;
}


class Header extends React.Component<IHeaderProps, IHeaderState>  {

    constructor(props: IHeaderProps){
        super(props);
        this.state = {open: false, anchorEl: null};
    }

    public handleClose() {
        this.setState({open: false, anchorEl: null});
    }

    public handleMenu(event: any) {
        this.setState({open: true, anchorEl: event.currentTarget});
    }

    public render() {
        return (
            <AppBar position="static" className={this.props.className}>
                <Toolbar className="ToolBar">
                    {/* <IconButton 
                        color="inherit" 
                        aria-label="Menu"
                        onClick={(event) => this.handleMenu(event)}
                        aria-owns={this.state.open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{
                            horizontal: 'right',
                            vertical: 'top',
                        }}
                        transformOrigin={{
                            horizontal: 'right',
                            vertical: 'top',
                        }}
                        open={this.state.open}
                        onClose={() => this.handleClose()}
                    >
                        <MenuItem onClick={() => this.handleClose()}>Profile</MenuItem>
                        <MenuItem onClick={() => this.handleClose()}>My account</MenuItem>
                    </Menu> */}
                    <Styled.AppTitle >
                        Alfred
                    </Styled.AppTitle>
                    {/* <div>
                        <IconButton
                        color="inherit"
                        >
                        <ErrorIcon />
                        </IconButton>
                    </div> */}
                </Toolbar>
            </AppBar>
        );
    }
}

export default styled(Header)`${Styled.HeaderStyle}`

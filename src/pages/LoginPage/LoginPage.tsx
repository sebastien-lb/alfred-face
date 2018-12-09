
import * as React from 'react';
import './LoginPage.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface ILoginState {
    login: string;
    password: string;
}

interface ILoginProps {
  loginRequest: (login: string, password: string) => void;
}

export class LoginPage extends React.Component<ILoginProps,ILoginState> {

  public constructor(props: ILoginProps) {
      super(props);
      const login = "";
      const password = "";
      this.state = {login, password};
  }

  public handleLoginChange(login: string) {
    this.setState({login});
  }

  public handlePasswordChange(password: string) {
    this.setState({password});
  }

  public handleLogin() {
    this.props.loginRequest(this.state.login, this.state.password);
  }

  public render() {
    return (
      <div className="LoginPage">
        <div>
            <form className="LoginPage-Form" autoComplete="off">
                <TextField 
                    id="login"
                    label="Login"
                    value={this.state.login}
                    className="LoginPage-TextField"
                    onChange={(ev) => this.handleLoginChange(ev.target.value)}/>
                <TextField 
                    id="password"
                    label="Password"
                    value={this.state.password}
                    className="LoginPage-TextField"
                    type="password"
                    onChange={(ev) => this.handlePasswordChange(ev.target.value)}/>
                <Button variant="contained" color="primary" className="LoginPage-Button" onClick={() => this.handleLogin()}>
                    Log In
                </Button>
            </form>
        </div>
      </div>
    );
  }
}

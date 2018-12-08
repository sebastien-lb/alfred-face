import { connect } from "react-redux";

import { IStore } from "../../interfaces";
import { LoginPage } from './LoginPage';

import { USER_ACTIONS } from '../../store/user';

const mapStateToProps = (state: IStore) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
  loginRequest: (login: string, password: string) => dispatch(USER_ACTIONS.loginRequest({login, password})),

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
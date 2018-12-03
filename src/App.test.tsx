import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { store } from './store';
import { history } from './store/router';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
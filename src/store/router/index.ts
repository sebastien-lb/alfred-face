
import { createBrowserHistory } from "history";

import { routerMiddleware } from "connected-react-router";

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
export const middleware = routerMiddleware(history);
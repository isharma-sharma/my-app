import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import reducers from './../src/reducer';
import table from './../src/component/table';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


// ReactDOM.render(<App />, document.getElementById('root'));
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={table} />
                </Switch>
            </div>
        </BrowserRouter>

    </Provider>, document.getElementById('root'));


// serviceWorker.unregister();

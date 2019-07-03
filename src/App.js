import * as React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import UserListContainer from './components/UserListContainer'
import UserDetailContainer from './components/UserDetailContainer'


class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path='/' component={UserListContainer} />
          <Route exact path='/users/:id' component={UserDetailContainer} />
        </div>
      </Provider>
    )
  }
}

export default App;

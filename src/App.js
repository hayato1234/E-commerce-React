import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MyConfigureStore } from './redux/configureStore'

const myStore = MyConfigureStore();

class App extends Component{
  render(){
    return (
      <Provider store={myStore}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

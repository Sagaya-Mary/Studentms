
import { Provider } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import RouterPath from './router/RouterPath';

import Store from './store/Store';

function App() {
  return (
    <Provider store={Store()}>
    <div className="App">
   <Header/>
   <RouterPath/>
   <Footer/>
    </div>
    </Provider>
  );
}

export default App;

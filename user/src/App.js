import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import MainBar from './components/bars/mainBar';

function App() {
  return (
    <div className="App">
      <MainBar />
      <BrowserRouter>
      <Route path='/' component={Home} exact/>
      <Route path='/home' component={Home} exact/>
      <Route path='/signup' component={SignUp} exact/>
      <Route path='/signin' component={SignIn} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
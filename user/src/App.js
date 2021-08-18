import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import MainBar from './components/bars/mainBar';
import Chart from './pages/chart';
import Account from './pages/account';
import AddQuestion from './pages/createQuestion';

function App() {
  return (
    <div className="App">
      <MainBar />
      <BrowserRouter>
      <Route path='/' component={Home} exact/>
      <Route path='/home' component={Home} exact/>
      <Route path='/signup' component={SignUp} exact/>
      <Route path='/signin' component={SignIn} exact/>
      <Route path='/chart' component={Chart} exact/>
      <Route path='/account' component={Account} exact/>
      <Route path='/create_question' component={AddQuestion} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;

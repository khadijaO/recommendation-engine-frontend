import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { CssVarsProvider } from '@mui/joy/styles';
import RegistrationForm from './components/registrationForm'
function App() {
  return (


    <CssVarsProvider>
      <div className="App">
        <Header />
        <RegistrationForm />
        {/* <Test/> */}
      </div>
      </CssVarsProvider>
        );
}

        export default App;

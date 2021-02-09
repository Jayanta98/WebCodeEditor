import Header from './Header';
import './App.css';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CodingSection from './CodingSection';


function App() {
  return (
    <>
<BrowserRouter>

      <Switch>
      <Route exact path="/WebCodeEditor" component={Header}/>
      <Route exact path="/CodeEditor" component={CodingSection}/> 
     </Switch>

      <Footer/>
</BrowserRouter>
 
    </>
  );
}

export default App;

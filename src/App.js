import logo from './logo.svg';
import './App.css';
// import './footer.css';
import { Route } from 'react-router-dom';
import Compaign from './FlyNYONComponents/compaign-banner';
import BookNow from './FlyNYONComponents/book-now';
import Accounts from './FlyNYONComponents/account';
import Header from './FlyNYONComponents/header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Route exact path="/" component={Compaign}/>
      <Route exact path="/book-now" component={BookNow}/>
      <Route exact path="/account" component={Accounts}/>
      {/* <Compaign />
      <BookNow /> */}
    </div>
  );
}

export default App;

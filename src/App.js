import './App.css';
import { Route } from 'react-router-dom';
import Compaign from './FlyNYONComponents/compaign-banner';
import BookNow from './FlyNYONComponents/book-now';
import Accounts from './FlyNYONComponents/account';
import Header from './FlyNYONComponents/header';
import Dogs from './FlyNYONComponents/api_data';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Route exact path="/" component={Compaign}/>
      <Route exact path="/book-now" component={BookNow}/>
      <Route exact path="/account" component={Accounts}/>
      <Route exact path="/api_data" component={Dogs}/>
      {/* <Compaign />
      <BookNow /> */}
    </div>
  );
}

export default App;

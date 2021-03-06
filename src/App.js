import React,{ Component } from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

 render(){
    return (
      <div>
       
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Classicona</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes= {this.state.dishes}/>
        
      </div>
    );
  }
}

export default App;

import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';


function App(){
  var containerStyle = {
    backgroundColor: 'rgb(255, 255, 255, 0.6)',
  };
  return (
    <div>
      <style jsx>{`
        body {
          background-image: url(${bg});
          background-size: cover;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }
        `}</style>
      <div className="container" style={containerStyle}>
        <Header/>
        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route exact path='/newbeer' component={NewBeerForm} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>

  );
}

export default App;

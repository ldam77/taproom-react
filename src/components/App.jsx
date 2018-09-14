import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import { v4 } from 'uuid';
import Admin from './Admin';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: {
        '1': {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine & Grapefruit',
          abv: '6.8%',
          price: '7',
          remaining: 9
        },
        '2': {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          remaining: 60
        },
        '3': {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7%',
          price: '3',
          remaining: 65
        },
        '4': {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv:  '5.9%',
          price: '6',
          remaining: 75
        },
        '5': {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv:  '7.5%',
          price: '6',
          remaining: 18
        },
        '6': {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv:  '5.5%',
          price: '6',
          remaining: 58
        }
      },
      selectedBeer: null
    };
    this.handleAddNewBeer = this.handleAddNewBeer.bind(this);
    this.handleSellBeer = this.handleSellBeer.bind(this);
    this.handleSelectBeer = this.handleSelectBeer.bind(this);
    this.handleEditBeer = this.handleEditBeer.bind(this);
  }

  handleAddNewBeer(newBeer){
    let newId = v4();
    let newBeerList = Object.assign({}, this.state.masterBeerList, {[newId]: newBeer});
    this.setState({masterBeerList: newBeerList});
  }

  handleSellBeer(beerId, amount){
    let newBeerList = Object.assign({}, this.state.masterBeerList);
    newBeerList[beerId].remaining -= amount;
    this.setState({masterBeerList: newBeerList});
  }

  handleSelectBeer(beerId) {
    this.setState({selectedBeer: beerId});
  }

  handleEditBeer(beerId, editedBeer) {
    let newBeerList = Object.assign({}, this.state.masterBeerList);
    newBeerList[beerId] = editedBeer;
    this.setState({masterBeerList: newBeerList});
    this.setState({selectedBeer: null});
  }

  render() {
    return (
      <div>
        <style global jsx>{`
          body {
            background-image: url(${bg});
            background-size: cover;
            background-attachment: fixed;
            background-repeat: no-repeat;
          }
          .containerStyle {
            background-color: rgb(255,255,255, 0.6);
          }
          `}</style>
        <div className="container containerStyle">
          <Header/>
          <Switch>
            <Route exact path='/' render={()=><BeerList beerList={this.state.masterBeerList} />} />
            <Route exact path='/admin' render={(props)=><Admin beerList={this.state.masterBeerList}
                                                               path={props.location.pathname}
                                                               selectedBeer={this.state.selectedBeer}
                                                               onSellBeer={this.handleSellBeer}
                                                               onSelectBeer={this.handleSelectBeer}
                                                               onEditBeer={this.handleEditBeer} />} />
            <Route exact path='/newbeer' render={()=><NewBeerForm onAddNewBeer={this.handleAddNewBeer} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;

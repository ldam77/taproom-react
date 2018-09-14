import React from 'react';
import PropTypes from 'prop-types';

function NewBeerForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;
  let newBeer = null;

  function handleInput() {
    newBeer = {name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: parseInt(_remaining.value)};
    _name = '';
    _brewer = '';
    _description = '';
    _abv = '';
    _price = '';
    _remaining = '';
  }

  function handleAddNewBeer(event) {
    event.preventDefault();
    handleInput();
    props.onAddNewBeer(newBeer);
  }

  function handleEditBeer(event) {
    event.preventDefault();
    handleInput();
    props.onEditBeer(props.beerId, newBeer);
  }

  const formInput =
    <div>
      <input type='text' defaultValue={props.name} placeholder='Beer Name' ref={(input)=>{_name = input;}}/> <br/>
      <input type='text' defaultValue={props.brewer} placeholder='Brewer' ref={(input)=>{_brewer = input;}}/> <br/>
      <input type='text' defaultValue={props.description} placeholder='Description' ref={(input)=>{_description = input;}}/> <br/>
      <input type='text' defaultValue={props.abv} placeholder='ABV %' ref={(input)=>{_abv = input;}}/> <br/>
      <input type='text' defaultValue={props.price} placeholder='Price' ref={(input)=>{_price = input;}}/> <br/>
      <input type='number' defaultValue={props.remaining} placeholder='Amount Remaining' ref={(input)=>{_remaining = input;}}/>
    </div>;

  if(props.beerId != null) {
    return(
      <div>
        <h1>Edit {props.name}</h1>
        <form onSubmit={handleEditBeer}>
          {formInput}
          <button type='submit'>Edit Beer!</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Add a new beer</h1>
        <form onSubmit={handleAddNewBeer}>
          {formInput}
          <button type='submit'>Add Beer!</button>
        </form>
      </div>
    );
  }
}

NewBeerForm.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.number,
  beerId: PropTypes.string,
  onAddNewBeer: PropTypes.func,
  onEditBeer: PropTypes.func
}
export default NewBeerForm;

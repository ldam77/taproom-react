import React from 'react';
import PropTypes from 'prop-types';

function NewBeerForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleAddNewBeer(event) {
    event.preventDefault();
    props.onAddNewBeer({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value});
    _name = '';
    _brewer = '';
    _description = '';
    _abv = '';
    _price = '';
    _remaining = '';
  }

  return (
    <div>
      <h1>Add a new beer</h1>
      <form onSubmit={handleAddNewBeer}>
        <input type='text' id='name' placeholder='Beer Name' ref={(input)=>{_name = input;}}/> <br/>
        <input type='text' id='brewer' placeholder='Brewer' ref={(input)=>{_brewer = input;}}/> <br/>
        <input type='text' id='description' placeholder='Description' ref={(input)=>{_description = input;}}/> <br/>
        <input type='text' id='abv' placeholder='ABV %' ref={(input)=>{_abv = input;}}/> <br/>
        <input type='text' id='price' placeholder='Price' ref={(input)=>{_price = input;}}/> <br/>
        <input type='text' id='remaining' placeholder='Amount Remaining' ref={(input)=>{_remaining = input;}}/> <br/>
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onAddNewBeer: PropTypes.func
}
export default NewBeerForm;

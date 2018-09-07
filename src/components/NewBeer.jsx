import React from 'react';

function NewBeer(){
  return (
    <div>
      <h1>Add a new beer</h1>
      <form>
        <input type='text' id='name' placeholder='Beer Name'/>
        <input type='text' id='brewer' placeholder='Brewer'/>
        <input type='text' id='description' placeholder='Description'/>
        <input type='text' id='abv' placeholder='ABV %'/>
        <input type='text' id='price' placeholder='Price'/>
        <input type='text' id='remaining' placeholder='Amount Remaining'/>
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;

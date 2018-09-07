import React from 'react';

function NewBeerForm() {
  return (
    <div>
      <h1>Add a new beer</h1>
      <form>
        <input type='text' id='name' placeholder='Beer Name'/> <br/>
        <input type='text' id='brewer' placeholder='Brewer'/> <br/>
        <input type='text' id='description' placeholder='Description'/> <br/>
        <input type='text' id='abv' placeholder='ABV %'/> <br/>
        <input type='text' id='price' placeholder='Price'/> <br/>
        <input type='text' id='remaining' placeholder='Amount Remaining'/> <br/>
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeerForm;

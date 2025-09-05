import React from 'react';

export const AddTransaction = () => {
    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    
   // Example static items; in a real app, these would be dynamic
  return (
    <div className='add-transaction-container'>
      <h3>Add new transaction</h3>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number'  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
}
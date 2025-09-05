import React from 'react';

export const TransactionList = () => {
   // Example static items; in a real app, these would be dynamic
  return (
    <div className='transaction-container'>
      <ul id='list' className='list'>
        
        <li className='minus'>
          Cash <span>-$50.00</span><button className='delete-btn'>x</button>
        </li>
        <li className='plus'>
          Salary <span>+$500.00</span><button className='delete-btn'>x</button>
        </li>
        <li className='minus'>
          Book <span>-$10.00</span><button className='delete-btn'>x</button>
        </li>
      </ul>
    </div>
  );
}
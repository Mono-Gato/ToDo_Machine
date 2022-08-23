import React from 'react';

function TodosEmpty() {
  return <p style={{fontSize: '24px', lineHeight:'1.5',textAlign: 'center',  marginTop: '80px',}}>¡Crea tu primer TODO haciendo click en <span style={{color: '#fff', backgroundColor: '#61DAFA', borderRadius: '50%', fontWeight:'bold', padding: '2px 9px'}}>+</span> !</p>;
}

export { TodosEmpty };
import React, { useState } from 'react'
import Average from './Average';
import Counter from './Counter';
import Info from './Info'

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter />
      <hr />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
      <hr />
      <Average />
    </div>
  );
};

export default App



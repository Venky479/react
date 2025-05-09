import React from 'react';

import Counter from './Components/Counter/Counter';
import AutoCounter from './Components/AutoCounter/AutoCounter';
import ConcatinateName from './Components/ConcatinateName/ConcatinateName';
import Parent from './Components/UseCallback/Parent';
import Fetch from './Components/FetchApi/Fetch';

function App() {
  
  return (
    <div className="App">
    {/* <Counter/> */}
    {/* <AutoCounter/> */}
    {/* <ConcatinateName/> */}
    {/* <Parent/> // useCallback and React.memo */}
    <Fetch/>
    </div>
  );
}

export default App;

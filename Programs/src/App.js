import React from 'react';

import Counter from './Components/Counter/Counter';
import AutoCounter from './Components/AutoCounter/AutoCounter';
import ConcatinateName from './Components/ConcatinateName/ConcatinateName';
import Parent from './Components/UseCallback/Parent';
import Fetch from './Components/FetchApi/Fetch';
import InputFocus from './Components/UseRef/useRef';

function App() {
  
  return (
    <div className="App">
    {/* <Counter/> */}
    {/* <AutoCounter/> */}
    {/* <ConcatinateName/> */}
    {/* <Parent/> // useCallback and React.memo */}
    {/* <Fetch/> */}
    <InputFocus/>
    </div>
  );
}

export default App;

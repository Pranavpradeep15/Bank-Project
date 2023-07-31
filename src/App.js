
import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shared from './Components/Shared'
import Dash from './Components/Dash';
import Request from './Components/Request';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Shared/>}>

<Route index element={<Dash/>}></Route>
<Route path='/Request' element={<Request/>}/>






  </Route>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;


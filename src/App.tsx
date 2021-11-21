import React from 'react';
import {MyHeader} from './components/MyHeader';
import {MyFooter} from './components/MyFooter';
import {MyMain} from './components/MyMain';
import {} from './ts/Index'; 
import { loadOnce } from './ts/addNewIteam';

function App() {
  return (   
    <div className="App" onLoad={loadOnce}>
     <MyHeader/>
     <MyMain/>
     <MyFooter/>
    </div>
  );
}

export default App;

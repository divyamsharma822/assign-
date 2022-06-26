import React from 'react';
import './App.scss';
import Card from './components/Card/Card';

const App = () => {
    return (
      <div className="App">
        <Card 
        img={"https://images.pexels.com/photos/7858744/pexels-photo-7858744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"}
        title={"Nord Stage 3 88 Keys"}
        brandNew={"Brand New"}
        shipping={"Free Shipping"}
        offer={"15% "}
        />
      </div>
    );
  }
  
  export default App;
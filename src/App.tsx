import React from 'react';

import  Header  from './components/Header';
import Carrinho  from './components/Carrinho'
import { Produtos } from './components/Produtos'
import { Footer } from './components/Footer';

import store from './app/store'
import { Provider } from 'react-redux';



function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Carrinho/>     
      <Produtos/>
      <Footer/>
    </Provider>
  );
}

export default App;

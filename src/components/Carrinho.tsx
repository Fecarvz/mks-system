import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../app/store';
import { toggleCart } from '../app/actions';
import { Container, Contador } from './carrinho_style';
import { useEffect, useState } from 'react';

import imagem1 from '../img/imagem1.png'
import imagem2 from '../img/imagem2.png'
import imagem3 from '../img/imagem3.png'
import imagem4 from '../img/imagem4.png'
import imagem5 from '../img/imagem5.png'
import imagem6 from '../img/imagem6.png'
import imagem7 from '../img/imagem7.png'
import imagem8 from '../img/imagem8.png'
import { Product } from './types';

const imagens = [imagem3, imagem6, imagem1, imagem2, imagem5, imagem4, imagem7, imagem8]



interface Props {
  isCartOpen: boolean;
  toggleCart: typeof toggleCart;
}





const Carrinho: React.FC<Props> = (props) => {
  const { isCartOpen, toggleCart } = props;
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart') || "[]").map((item: Product) => ({...item, quantity: 1}))
  );

  // Pega o valor total do carrinho
  const totalValue = cartItems.reduce((total: number, item: { price: number, quantity: number }) => total + item.price * (item.quantity || 1), 0)


  // Verifica se existem novos itens no carrinho
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || "[]")
    setCartItems(cart);
  }, [isCartOpen]);


  // Abre ou fecha o carrinho
  const handleToggleCart = () => {
    toggleCart();
  };

  // Remove item do carrinho
  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  // Incrementa a quantidade de um produto 
  const handleAddQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    if(updatedCart[index].quantity == undefined)
        updatedCart[index].quantity = 1;
    else
        updatedCart[index].quantity++;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

  //Decrementa a quantidade de um produto
  const handleRemoveQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    if(updatedCart[index].quantity && updatedCart[index].quantity > 1) {
        updatedCart[index].quantity--;
    }
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const right = props.isCartOpen ? '0px' : '-490px';

  return (
    <Container style={{ right }}>
      <div>
        <h3>Carrinho <br/>de compras</h3>
        <p onClick={handleToggleCart}>X</p>
      </div>
      
      {cartItems.map((e:Product, index:number) => {
        return(
          <section key={e.id}>
            <img src={imagens[e.id-1]} alt="" />
            <h3>{e.name}</h3>
            <Contador>
              <span>Qtd:</span>
              <div>
                <button onClick={() => handleRemoveQuantity(index)}>-</button>
                <p>{e.quantity || 1}</p>
                <button onClick={() => handleAddQuantity(index)}>+</button>
              </div>
            </Contador>
            <span>R${Math.floor(e.price)}</span>
            <p onClick = {() => handleRemoveItem(index)}>x</p>
          </section>
        )
      })}
      <h5>Valor total <span>${totalValue || 0}</span></h5>
      <button>Finalizar Compra</button>
    </Container>
  );
}

const mapStateToProps = (state: RootState) => ({
  isCartOpen: state.cart.isCartOpen,
  items: state.cart.items,
});

const mapDispatchToProps = {
  toggleCart,
};


export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);


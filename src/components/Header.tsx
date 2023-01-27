import * as React from 'react';
import { useState, useEffect} from 'react'

import { Topo, Logo, Logo2, ContainerCar, Car } from './header_style'
import CarCompras from '../img/Vector.png'

import { connect } from 'react-redux';
import { toggleCart } from '../app/actions';
import { RootState } from '../app/store';

interface Props {
  isCartOpen: boolean;
  toggleCart: typeof toggleCart;
}

const Header: React.FC<Props> = (props) => {
  const { toggleCart } = props;

  const handleToggleCart = () => {
    toggleCart();
  };



  const [qntdItens, setQntdItens] = useState(0);

  useEffect(() => {
      const cart = JSON.parse(localStorage.getItem('cart') || "[]");
      setQntdItens(cart.length);
  }, [localStorage.getItem('cart')]);
  
  return (
    <Topo>
      <Logo>MKS <Logo2>sistemas</Logo2></Logo>
      <ContainerCar onClick={handleToggleCart}>
        <Car src={CarCompras} ></Car>
        <p>{qntdItens|| '!'} </p>
      </ContainerCar>
    </Topo>
  );
};

const mapStateToProps = (state: RootState) => ({
  isCartOpen: state.cart.isCartOpen,
});

const mapDispatchToProps = {
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import {TiShoppingBag} from 'react-icons/ti'
import React, { useState, useEffect } from 'react';
import axios from 'axios';



import { Product } from './types';
import { Container, Shimmer } from './produtos_style'

import imagem0 from '../img/imagem1.png'
import imagem1 from '../img/imagem2.png'
import imagem2 from '../img/imagem3.png'
import imagem3 from '../img/imagem4.png'
import imagem4 from '../img/imagem5.png'
import imagem5 from '../img/imagem6.png'
import imagem6 from '../img/imagem7.png'
import imagem7 from '../img/imagem8.png'

const imagens = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7]

interface Response {
    products: Product[];
    count: number;
}

const getProducts = async (): Promise<Response> => {
  try {
      const response = await axios.get<Response>('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products', {
          params: {
              page: 1,
              rows: 10,
              sortBy: 'price',
              orderBy: 'ASC'
          }
      });
      return response.data;
  } catch (error) {
      console.error(error);
      throw error;
  }
};



function addCart(item: Product) {
let cart: Product[] = JSON.parse(localStorage.getItem('cart') || "[]")

// verifica se o item já existe no carrinho
const existingItem = cart.find(i => i.name === item.name);

// se o item não existe no carrinho, adiciona ele
if (!existingItem) {
  alert(`${item.name} foi adicionado ao carrinho!`)
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
}
}



export  const Produtos = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Response>('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products', {
          params: {
            page: 1,
            rows: 10,
            sortBy: 'price',
            orderBy: 'DESC'
          }
        });
        setProducts(response.data.products);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    fetchData();
  }, []);

  return (
    <>
    {loading ? (
      <Shimmer>
      </Shimmer>
      ) : (
        <Container>
      {products.map((product, index) => (
        <div key={index}>
          <div>
            <img src={imagens[index]} alt="" />
          </div>
          <section>
            <h2>{product.name}</h2>
            <span>R${Math.floor(product.price)}</span>
          </section>
            <p>{product.description}</p>
            <button onClick={() => addCart(product)}><TiShoppingBag/>Comprar</button>
          </div>
            ))}
        </Container>
)}
</>
)}

import styled from 'styled-components'

export const Container= styled.div`
  position: absolute;
  width: 486px;
  height: 1024px;
  background: #0f52ba;
  z-index: 99;
  box-shadow: 0px 0px 10px rgba(0,0,0,.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  >div{
    height: 100px;
  }
  
  >div > p{
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2rem;
    right: 1rem;
    width: 38px;
    height: 38px;
    color: #fff;
    background: #000;
    border-radius: 50%;
    font-size: 28px;
    line-height: 15px;
    font-weight: 400;
  }
  >div > h3{
    position: absolute;
    color: #fff;
    font-size: 27px;
    line-height: 32.91px;
    align-self: flex-start;
    top: 20px;
    left: 20px;
  }
  >button{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 85px;
    color: #fff;
    background: #000;
    font-size: 28px;
    font-weight: 700;
  }
  >h5 {
    display: flex;
    position: absolute;
    bottom: 90px;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    justify-content: space-between;
    width: 386px;
  }
  >section{
    width: 379px;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  >section > img{
    width: 70px;
  }
  >section > h3{
    width: 113px;
    font-size: 13px;
    font-weight: 400;
  }
  >section > span{
    font-weight: 700;
    font-size: 14px;
    height: 17px;
    width: 62px;
  }
  >section > p{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #000;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    align-self: flex-start;
    position: absolute;
    right: 50px;
  }

`


export const Contador = styled.div`
  display: flex;
  flex-direction: column;

  >span{
    font-size: 5px;
    color: #000;
    font-weight: 400;
  }

  >div{
    border: 1px solid #bfbfbf;
    background: #fff;
    border-radius: 8px;
    display: flex;
    width: 50px;
    height: 19px;
    align-items: center
  }
  >div > button{
    border: none;
    width: 33%;
    background: #fff;
    border-radius: 8px;
    cursor: pointer;
  }
  >div > button:first-child{
    border-radius: 8px 0 0 8px;
    border-right: 1px solid #bfbfbf;
    margin-right: 10px;
  }
  >div > button:last-child{
    border-left: 1px solid #bfbfbf;
    border-radius: 0px 8px 8px 0
  }
  >div>p{
    width: 34%;
    font-weight: 400;
    font-size: 8px;
  }
`

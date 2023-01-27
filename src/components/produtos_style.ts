import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 10%;
  flex-wrap: wrap;
  background: #e5e5e5;
  height: 990px;

  >div{
    display: flex;
    height: 300px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 21%;
    margin: 20px;
    background: #fff;
    border-radius: 8px;
  }
  >div>div{
    width: 130px;
    height: 130px;
    margin-bottom: 28px;
  }

  >div>div>img{
    width: 100%;
  }

  >div > section{
    display: flex;
  }

  > div > section > h2{
    font-size: 16px;
    font-weight: 400;
    width: 124px;
    height: 38px;
  }

  >div > section > span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 26px;
    border-radius: 5px;
    background: #373737;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
  }


  >div > button{
    cursor: pointer;
    width: 100%;
    height: 31.91px;
    background: green;
    border: none;
    border-radius: 0 0 8px 8px;
    background: #0f52ba;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  >div > button:hover{
    border: 1px solid white;
  }

  >div > p{
    font-size: 10px;
    font-weight: 300;
    padding: 10px;
  }
`

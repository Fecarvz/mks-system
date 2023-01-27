import styled from 'styled-components'

export const Topo = styled.header`
  position: absolute;
  width: 100vw;
  height: 101px;
  left: 0px;
  top: 0px;
  background: #0F52BA;
  display: flex;
  align-items: center;
  color: white;
  line-height: 19px;
  justify-content: space-around;
`

export const Logo = styled.h1`
  cursor: pointer;
  font-weight: 600;
  font-size: 40px;
  margin: 0px 300px 0px 0px
`

export const Logo2 = styled.span`
  cursor: pointer;
  font-weight: 300;
  font-size: 19px;
`

export const ContainerCar = styled.div`
  width: 90px;
  height: 45px;
  display: flex;
  color: #000;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0px 0px 0px 300px;
  gap: 10px;
  > p{
    font-size: 18px;
    font-weight: 700;
  }
`
export const Car = styled.img`
`
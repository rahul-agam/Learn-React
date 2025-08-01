import React from 'react'
import styled from 'styled-components';

const StartGame = (props) => {

  return (
    <>
        <Container>
            <div>
                <img src="/images/dices.png" />
            </div>
            
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={props.toggle}>Play Now</Button>
            </div>
        </Container>
    </>
  )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Button = styled.button`
    color: #FFFFFF;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    transition: 0.4s background ease-in;
    cursor: pointer
    border: 1px solid transparent;

    &:hover{
        background-color:white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`;
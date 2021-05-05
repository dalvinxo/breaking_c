import React from 'react'
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    background-color: white;
    min-width: 800px;
    padding: 3rem;
    margin-top:3rem;
    @media (min-width: 993px){
        margin-top:3rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
    
        
        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`



const Frases = ({frases}) => {

   // if(Object.keys(frases).length == 0) return null;
    return( 

        <ContenedorFrase>
            <h1>{frases.quote}</h1>
            <p>{frases.author}</p>
        </ContenedorFrase>


     );
}
 
export default Frases;
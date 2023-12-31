import styled from 'styled-components'


export const Container = styled.footer`

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    width: 100%;
    height: 7.7rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 25rem;
    flex-shrink: 0;

    .footer{
        display: flex;
        gap: 1rem ;
        margin-left: 8%;

        >h1{
            color: ${({theme}) => theme.COLORS.LIGHT_100} ;
            font-family: 'Roboto', sans-serif;
            font-size: 2.6rem;
            white-space: nowrap;
        }
        
    }
    p{

        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;

        color: ${({theme}) => theme.COLORS.LIGHT_200};
        white-space: nowrap;
        margin-right: 8%;
    }



    @media (max-width: 1229px){
        
        .footer{

        >h1{
            font-size: 2.2rem;
        }
        
    }
    p{
        font-size: 1.2rem;
        
    }
    }
`
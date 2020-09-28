import styled from "@emotion/styled";

export const ButtonContainer = styled.div`   
    width: 25rem;
    max-width: 25rem;
    display: flex;
    padding: 1rem 1.5rem 1rem 1.5rem;
    margin-bottom: 8rem;
`;

export const Button = styled.button`
    padding: inherit;
    width: inherit;
    max-width: inherit;
    
    font-size: 1.5rem;

    border-bottom: 0.80mm solid grey;
    border-right: 0.80mm solid grey;
    border-top: 0.4mm solid black;
    border-left: 0.4mm solid black;
    border-radius: 5px;

    background-color: #FDE5FE;

    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;

    &:hover {
        cursor: pointer;

        border-bottom: 0.80mm solid black;
        border-right: 0.80mm solid black;
        border-top: 0.4mm solid black;
        border-left: 0.4mm solid black;
        
        background-color: #FD90FF;
    
        -webkit-transition: background-color 25ms linear;
        -ms-transition: background-color 25ms linear;
        transition: background-color 25ms linear;
    }

`;
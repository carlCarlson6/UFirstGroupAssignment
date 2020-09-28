import styled from "@emotion/styled";

export const ChartViewContainer = styled.div`
    p {
        padding-bottom: 1.5rem;
    }
`;

export const ChartContainer = styled.div`
    margin: 0 7.5rem;
`;

export const ChartInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
`;

export const ChartErrorConatiner = styled.div`
    margin-top: 5rem;
    text-align: center;
    
    div {
        display: inline-block;
    }

    button {
        border-radius: 0;
        background-color: #F35252;

        &:hover { 
            background-color: #FF9999;
        }
        
    }
`;
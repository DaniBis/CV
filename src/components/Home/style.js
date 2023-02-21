import styled from 'styled-components';

export const Section = styled.div`
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 8%;
    margin-top: 35%;
    margin-right: auto;
    margin-left: auto;
    color: #FFF;
    @media (max-width: 968px) {
        padding: 0;
        margin-top: 10%;
    }
`;

export const Name =  styled(Section)`
    width: 100%;
    font-size: 48px;
    margin: 0;
    text-align: start;
    line-height: 1;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    @media (max-width: 968px) {
        padding: 0;
        text-align: center;
        font-size: 36px;
      }
`;

export const Statement = styled(Name)`
    font-size: 24px;
    margin-top: 20px;
    @media (max-width: 968px) {
        font-size: 18px;
      }
`;

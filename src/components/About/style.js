import styled from 'styled-components';

export const AboutBody = styled.div`
    overflow-y: scroll;
    position: absolute;
    height: 100%;
    width: 100%;
`;

export const MenuBar = styled.div`
    display: inline-flex;
    width: 60%;
`;

export const MenuBarBackground = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    background: #000;
    z-index: 1;
`;

export const Name =  styled.h1`
    width: 100%;
    margin: 0;
    padding: 20px;
    text-align: start;
    line-height: 1;
    color: #FFF;
    font-weight: 700;
    font-size: 36px;
    font-family: "Poppins", sans-serif;
    @media (max-width: 968px) {
        display: none;
      }
`;

export const HalfSection = styled.div`
     width: 100%;
     padding: 0;  
     & > h2 {
        margin: 0 20%;
        color: #ff2a00;
        background: rgba(0,0,0,.5);
        text-align: initial;
        padding-left: 12.5%;
     }
     @media( max-width: 1350px) {
        & > h2 {
            padding-left: 27%;
        }
     @media( max-width: 968px) {
        & > h2 {
            margin: 0;
            padding-left: 46%;
        }
     }
    }
`

export const IntroSection = styled.div`
    display: inline-flex;
    max-width: -webkit-fill-available;
    width: 100%;
    margin: 0 20%;
    padding: 30px;
    background: rgba(0,0,0,.5);
    & > div > div > img { 
        width: 400px;
        filter: invert(1);
        opacity: 0.6;
    }

    & > div > div > div > h1 {
        position: absolute;
        margin-left: 15vw;
        margin-top: -300px;
        font-size: 13px;
        transform: rotate(17deg);
    }

    & > div > div > div > h1 > a {
        color: #FFF;
        text-decoration: none;
    }

    @media( max-width: 1350px) {
        display: inline-block;
        & > div > div > div > h1 {
            margin-left: 28vw;
        }
    }

    @media( max-width: 968px) {
        margin: 0;
        & > div > div > div > h1 {
            margin-left: 48vw;
        }
    }
`;

export const SkillBar = styled.div`
    padding: 30px;
    color: #FFF;
    text-align: initial;
`;

export const SkillsSection = styled(IntroSection)`
    width: 100%;
`;

export const HobbySection = styled(IntroSection)`
    width: 100%;
`;

export const Hobbies = styled(IntroSection)`
    width: 100%;
    margin: 10px;
    border: 3px solid #111;
    border-radius: 5px;
    white-space: nowrap;
    background-color: #111;
    color: #FFF;
`;

import styled, { keyframes } from 'styled-components';
import imageIcons from '../../images';

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
    background: #1d2230;
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
     @media( max-width: 968px) {
        & > h2 {
            margin: 0;
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
    & > div > div > img { 
        width: 400px;
        filter: invert(1);
        opacity: 0.6;
    }

    & > div > div > div > h2 {
        position: absolute;
        margin-left: 29vw;
        margin-top: -300px;
        font-size: 13px;
        transform: rotate(17deg);
    }

    & > div > div > div > h2 > a {
        color: #FFF;
        text-decoration: none;
    }

    @media( max-width: 1350px) {
        display: inline-block;
        & > div > div > div > h2 {
            margin-left: 28vw;
        }
    }

    @media( max-width: 968px) {
        margin: 0;
        & > div > div > div > h2 {
            margin-left: 48vw;
        }
    }
`;


export const IntroParagraph = styled(IntroSection)`
    width: 65%;
    display: flex;
    background: #1d2230;
    margin: 0 auto;
    margin-right: 20vw;
    opacity: 0.8;
    & h1 {
        color: #FFF;
        transform: rotate(-90deg);
    }
    @media( max-width: 1050px) {
        & h1 {
            display: none;
        }
        margin: 0 auto;
    }
`

export const SkillBar = styled.div`
    padding: 30px;
    color: #FFF;
    text-align: initial;
`;


export const IndividualSkill = styled.div`
    position: absolute;
    left: calc(50% - 25px);
    top: calc(50% - 25px);
    height: 50px;
    width: 50px;
`;

const Circle = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(360deg); }
`

const InnerCircle = keyframes`
    from { transform:rotate(0deg); }
    to { transform:rotate(-360deg); }
`

export const SkillsSection = styled(IntroSection)`
    position: relative;
    border-radius: 50%;
    width: 500px;
    height: 700px;
    background: linear-gradient(to bottom right, #888 0%, #fff 50%, 0 50%, #a48d01 100%);
    animation: ${Circle} 5s linear infinite;
    & ${IndividualSkill}:nth-child(1) {
        transform: translateY(0vw) translateX(16vw);
    }
    
    & ${IndividualSkill}:nth-child(2) {
        transform: translateY(11vw) translateX(11vw);
    }
    
    & ${IndividualSkill}:nth-child(3) {
        transform: translateY(16vw) translateX(0vw);
    }
    
    & ${IndividualSkill}:nth-child(4) {
        transform: translateY(11vw) translateX(-11vw);
    }
    
    & ${IndividualSkill}:nth-child(5) {
        transform: translateY(0vw) translateX(-16vw);
    }

    & ${IndividualSkill}:nth-child(6) {
        transform: translateY(-11vw) translateX(-11vw);
    }

    & ${IndividualSkill}:nth-child(7) {
        transform: translateY(-16vw) translateX(0vw);
    }

    & ${IndividualSkill}:nth-child(8) {
         transform: translateY(-11vw) translateX(11vw);
    }
    & ${IndividualSkill}:nth-child(9) {
        transform: translate(0px,0px) rotate(-100deg)

    }

    @media( max-width: 968px) {
        & ${IndividualSkill}:nth-child(1) {
            transform: translateY(0px) translateX(175px);
        }
        
        & ${IndividualSkill}:nth-child(2) {
            transform: translateY(125px) translateX(125px);
        }
        
        & ${IndividualSkill}:nth-child(3) {
            transform: translateY(175px) translateX(0px);
        }
        
        & ${IndividualSkill}:nth-child(4) {
            transform: translateY(125px) translateX(-125px);
        }
        
        & ${IndividualSkill}:nth-child(5) {
            transform: translateY(0px) translateX(-175px);
        }
    
        & ${IndividualSkill}:nth-child(6) {
            transform: translateY(-125px) translateX(-125px);
        }
    
        & ${IndividualSkill}:nth-child(7) {
            transform: translateY(-175px) translateX(0px);
        }
    
        & ${IndividualSkill}:nth-child(8) {
             transform: translateY(-125px) translateX(125px);
        }
    }
`;

export const GroupItemsSkill = styled.div`
    display: -webkit-box;
    background: linear-gradient(to bottom right, #888 0%, #fff 50%, 0 50%, #a48d01 100%);
    animation: ${InnerCircle} 5s linear infinite;
    & img:nth-child(1) {
        width: 100%;
    }
    & label {
        margin: 2px;
        color: #1d2230;
        font-weight: bold;
    }
`

export const AboutSkill = styled(IntroSection)`
    position: relative;
    width: 100%;
    & h2 {
        position:absolute;
        left: 53%;
        margin-left: -50px;
        top: 53%;
        margin-top: -50px;
        color: #FFF;
    }
    @media( max-width: 968px) {
        & h2 {
            left: 55%;
        }
    }
`

export const ProjectSection = styled(IntroSection)`
    display: block;
    width: 100%;
    background: linear-gradient(to top left, #A2A2A2 50%, #1d2230 100%);
    opacity: 0.8;
    & > h1 {
        color: #FFF;
        text-align: centre;
    }
    @media( max-width: 1050px) {
        margin: 0 auto;
    }
`;

export const Projects = styled(IntroSection)`
    width: 100%;
    margin: 0;
    border-radius: 5px;
    white-space: nowrap;
    color: #FFF;
    & div {
        padding: 4vw;
    }
    & img {
        width:50%!important;
        opacity: 1!important;
    }
    & label {
        font-weight: bold;
    }
    @media( max-width: 968px) {
        & img {
            width:70%!important;
        }
    }
`;

export const Portrait = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #FFF;
    border-radius: 50%;
    background: url(${imageIcons.name});
    background-size: cover;
`;

export const AboutFooter = styled.div`
    width: 100%;
    margin 0 auto;
    padding: 30px;
    background: #1d2230;
    opacity: 0.8;
    & h1 > a{
        color: #ff2a00!important;
        font-size: 50px;
        text-decoration: none;
    }
    & h5 {
        width: 50%;
        margin: 0 auto;
        font-size: 20px;
        color: #FFF;
    }
`;
import styled from 'styled-components';

export const ContactImg = styled.div`
display: inline-block;
width: 50%;
margin: 80px auto;
padding: 50px 30px;
border: 3px solid #333;
background-color: rgba(2,2,2,.5);
color: #00b4ff;
& > h3 > a {
    text-decoration: none;
    color: #00b4ff;
}
& > img {
    width: 100px;
    filter: invert(1);
    opacity: 0.6;
}
`;

export const ContactSection= styled.div`

`
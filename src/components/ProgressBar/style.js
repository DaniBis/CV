import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    & > span {
        margin-left: 15px;
        margin-top: -7px;
    }
    & > progress {
        width: 100%;
        height: 10px;
        transition: .9s;
        background-color: #00b4ff;
    }
`;
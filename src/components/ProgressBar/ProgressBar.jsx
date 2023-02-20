import React from "react";
import PropTypes from "prop-types";
import { Container } from './style';

const ProgressBar = props => {
    const { value, max } = props;
    return( 
        <Container>
            <progress value={value} max={max} />
            <span>{(value / max ) *100}%</span>
        </Container>
    );
};

ProgressBar.PropTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
};

ProgressBar.defaultProps = {
    max: 100
}

export default ProgressBar;
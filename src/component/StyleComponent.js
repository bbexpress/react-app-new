import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: black;
    color: white;
    font-size: 28px;
`;

export default function StyleComponent() {
    return (
        <div>
            <StyledButton>Login</StyledButton>
        </div>
    )
}

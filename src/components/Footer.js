import React from 'react';

export default function Footer(props) {
    let footerStyle = {
        backgroundColor: props.mode === 'dark' ? 'black' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
        padding: '0.4rem',
        textAlign: 'center',
        borderTop: `2px solid ${props.mode === 'dark' ? 'white' : 'black'}`,
    };

    return (
        <footer style={footerStyle}>
            <p>
                &copy; 2024 StringStudio Inc. All rights reserved.
            </p>
        </footer>
    );
}

import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            marginTop: '40px',
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
            opacity: 0.7
        }}>
            <p>&copy; {new Date().getFullYear()} Tic Tac Toe Reimagined. Built with React & Vite.</p>
        </footer>
    );
};

export default Footer;

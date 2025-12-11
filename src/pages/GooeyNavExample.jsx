import React from 'react';
import GooeyNav from '../components/GooeyNav/GooeyNav';

const GooeyNavExample = () => {
    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' }
    ];

    return (
        <div style={{
            padding: '4rem 2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
        }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>GooeyNav Component</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                    Interactive navigation with gooey particle effects
                </p>
            </div>

            <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)'
            }}>
                <h2 style={{ color: 'white', marginBottom: '2rem' }}>Default Navigation</h2>
                <GooeyNav items={navItems} />
            </div>

            <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)'
            }}>
                <h2 style={{ color: 'white', marginBottom: '2rem' }}>Custom Animation Speed</h2>
                <GooeyNav
                    items={navItems}
                    animationTime={400}
                    particleCount={20}
                />
            </div>

            <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)'
            }}>
                <h2 style={{ color: 'white', marginBottom: '2rem' }}>Different Initial Active</h2>
                <GooeyNav
                    items={navItems}
                    initialActiveIndex={2}
                />
            </div>
        </div>
    );
};

export default GooeyNavExample;

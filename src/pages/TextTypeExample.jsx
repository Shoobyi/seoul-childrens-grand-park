import React from 'react';
import TextType from '../components/TextType/TextType';

const TextTypeExample = () => {
    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h1>TextType Component Examples</h1>

            <div style={{ marginBottom: '2rem' }}>
                <h2>Basic Example</h2>
                <TextType
                    text="Hello, World!"
                    typingSpeed={100}
                />
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h2>Multiple Texts (Loop)</h2>
                <TextType
                    text={['Welcome to Seoul Children\'s Grand Park!', 'Enjoy your visit!', 'Have a great day!']}
                    typingSpeed={80}
                    pauseDuration={1500}
                />
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h2>Custom Cursor</h2>
                <TextType
                    text="Custom cursor example"
                    cursorCharacter="▋"
                    cursorBlinkDuration={0.3}
                    typingSpeed={100}
                />
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h2>Colored Text</h2>
                <TextType
                    text={['Red Text', 'Blue Text', 'Green Text']}
                    textColors={['#ff0000', '#0000ff', '#00ff00']}
                    typingSpeed={100}
                />
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h2>Variable Speed</h2>
                <TextType
                    text="This text types at variable speed!"
                    variableSpeed={{ min: 30, max: 150 }}
                />
            </div>
        </div>
    );
};

export default TextTypeExample;

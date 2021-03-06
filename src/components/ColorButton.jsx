import { useState } from 'react';

export default function ColorButton() {
    const [color, setColor] = useState('grey');
    function ChangeState() {
        return color === 'blue' ? setColor('grey') : setColor('blue')
    }
    return (
        <div>
            <button
                style={{
                    background: color,
                    margin: '10px',
                    padding: '30px',
                    borderRadius: '70px',
                }}
                type='button'
                onClick={ChangeState}
            >
                color
            </button>

        </div>
    )
}
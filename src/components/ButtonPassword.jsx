import getPassword from '../getPassword';

export default function ButtonPassword() {
    return (
        <div>
            <button
                style={{
                    color: 'red',
                    // background: color,
                    margin: '10px',
                    padding: '30px',
                    borderRadius: '70px',
                }}
                type='button'
                onClick={getPassword}
            >
                ButtonPassword
            </button>
        </div>
    )
}

import React from 'react'
import '../style.css'

function Name() {
    const names = ["Ilyas","Mouad","Mohamed"];
    return (
        <div>
            {
                names.map(name => <h3 className='primary font-xl' key={name}>{name}</h3>)
            }
        </div>
    )
}

export default Name
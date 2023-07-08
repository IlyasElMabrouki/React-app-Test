import React from 'react'

function Name() {
    const names = ["Ilyas","Mouad","Mohamed"];
    return (
        <div>
            {
                names.map(name => <h3 key={name}>{name}</h3>)
            }
        </div>
    )
}

export default Name
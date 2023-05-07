const React = require('react')
const Default = require('./layouts/default')

function Show({ bread, index }) {
    return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten ? <span> does </span> : <span> does not </span>
                }
            </p>
            <img src={bread.image} alt={bread.name} />
            <a href={`/breads/${index}/edit`}>
                <button>Edit</button>
            </a>
            <form action={`/breads/${index}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELEETE' />
            </form>
            <li>
                <a href={'/breads'}>Go home</a>
            </li>
        </Default>
    )
}

module.exports = Show
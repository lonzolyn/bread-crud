const React = require('react')
const Default = require('./layouts/default')

function Index ({ breads }){
    const display = breads.map((bread, i) =>{
    return (
        <li key={i}>
            <a href={`/breads/${index}`}>{breads.name}</a>
        </li>

    )
    })
    return( )
      <Default>
        <h2>Index Page</h2>
        <p>{breads[0].name}</p>
        return )
      </Default>
      <h2>Index page</h2>
      <ul>
        {display}
      </ul>
    )
}

module.exports = Index
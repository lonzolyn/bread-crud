const React = require('react')
const Default = require('./layouts/default')

function Index ({ breads }) {
  const display = breads.map((breads, i) => {
    return (
        <li key={i}>
           <a href={`/breads/${i}`}>{breads.name}</a>
        </li>
    )
  })

  return(
    <Default>
      <h2>Index Page</h2>
      <ul>
        {display}
      </ul>
      
    </Default>
  )
}

module.exports = Index
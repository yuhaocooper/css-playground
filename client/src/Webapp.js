import React, {useEffect} from 'react'

function Webapp(){

  useEffect(() => {

    var apikey = 'AIzaSyCEB_8OvOMItGZvgyKSX9NGFX_gsMtb9J4'

    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch( err => console.log(err))
  })
  return(
    <div className="section middle-container">
      <h1>Nextbus</h1>
    </div>
  )
}

export default Webapp

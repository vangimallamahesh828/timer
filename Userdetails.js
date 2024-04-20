import React from 'react'
import { useSelector } from 'react-redux'
import "./Color.css"
function Userdetails() {
  let lokesh = useSelector((state) => {
    return state
  })
  return (
    <>
      <h1>Userdetails</h1>
      <div style={{display:"flex",flexDirection:"row"}}>
      {
        lokesh.accounts.map((e) => {
          return (
            <div class='mmm '>
            <div className='nnn'>
              
                <div class='cord-header '>
                  <p>ID: <span class="id-value">{e.id}</span></p>
                </div>
                <div class='cord-body c-2'>
                  <p>NAME: <span class="name-value">{e.name}</span></p>
                  <p>SOURCE: <span class="source-value">{e.source}</span></p>
                  <p>disgination: <span class="source-value">{e.disgination}</span></p>
                </div>
                <div class='cord-footer c-3'>

                </div>
              </div>
            </div>
          )
        })
      }
      </div>

    </>
  )
}

export default Userdetails
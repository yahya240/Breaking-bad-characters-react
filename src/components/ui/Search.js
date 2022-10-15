import React from 'react'

function Search({text,setText}) {
    
  return (
    <section className='search'>
        <form>
            <input className='form-control' type='text' placeholder='Search characters' 
            value={text} onChange={(e)=>setText(e.target.value)}></input>
        </form>
    </section>
  )
}

export default Search
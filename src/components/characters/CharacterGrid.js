import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

function CharacterGrid({isLoading,items}) {
  if(isLoading){
    return(
        <div className='center'>
          <Spinner />
        </div>
    )
  }else{
    return(
        <section className='cards'>
            {items.map((item)=>{
                return <CharacterItem key={item.char_id} {...item}></CharacterItem>
            })}
        </section>
    )
  }
}

export default CharacterGrid
import React from 'react'
import travelList from '../data/travel'
import TravelListItem from './TravelListItem'

const TravelList = () => {
  return (
    <div className='flex flex-col gap-8 '>
       
    {travelList.map((post) => (
      <React.Fragment key={post.id}>
        <TravelListItem
        title={post.title}
        date={post.date}
        author={post.author}
        category={post.category}
        text={post.text}
        img={post.img}
      />
     <div className="divider"></div>
      </React.Fragment>
         ))}
    
      
         </div>
  )
}

export default TravelList
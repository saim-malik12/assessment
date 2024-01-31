import React from 'react'

import Categories from './Categries'
//

const Home = () => {
  return (
    <div>
    <section>
        <h2 className='cat' style={{textAlign:'center',margin:'4px'}}>Categories</h2>
        <Categories/>
    </section>
    </div>
  )
}

export default Home

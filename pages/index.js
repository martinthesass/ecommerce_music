import React, { useState } from 'react'
import {client} from '../lib/client'

import { Product, FooterBanner, HeroBanner } from '../components';



const Home = ({products, bannerData}) => (
  
    <div>

    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

    


    <div className='products-heading'>
    <h2>Check out our best selling pairs</h2>
    <p></p>
    

    </div>


    <div className='products-container'>
      {products?.map ((product) => <Product key={product._id} product ={product} />)}
    </div>

    <FooterBanner footerBanner = {bannerData && bannerData[0]} />
      
    </div>
  );

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]'
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch(bannerQuery);

    return {
      props: {products, bannerData}
    }

  }

  function App(){
    const[shopItems, setShopItems] = useState(Product);
    const[categories, setCategories] = useState([]);

    const filterItems = (category) => {
      const newItems = items.filter((item)=> item.category === category)

      setShopItems(newItems)
    }

    return (
      <main>
        <section className='shop-section'>
          <div className='title'>
            <h2>Our Products</h2>
          </div>

          <Categories filterItems={filterItems}/>
          <Menu items = {menuItems} />
        </section>
      </main>

    )
  }


export default Home;

import React from 'react'
import baby from '../img/babyproduct.webp';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import CategoriesCard from './CategoriesCard';
export default function AllCategoy() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1150 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1150, min: 700 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 700, min: 450 },
      items: 3
    },
    mobile: {
      breakpoint: { max:450 , min: 0 },
      items: 2
    }
  };
  
      
  return (
    <div>
      <div className="container"style={{marginTop:'3vh'}}>
        <h3 className='py-2'>||Browse Medicines by Category||</h3>
            
            <Carousel responsive={responsive}>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                <div><CategoriesCard  img={baby} title="Baby Product" location="Kolkata" btntext="Shop Now"/> </div>
                
            </Carousel>
        </div>

    </div>
  )
}

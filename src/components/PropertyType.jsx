
import React from 'react'

function PropertyType() {
  return (
    <> 
    <div className='bg-gray-100 text-center font-semibold pt-10'> 
      <h1 className='text-4xl md:text-5xl'>Featured Property Types</h1>
      <h5 className='text-2xl md:text-3xl mt-4'>Find All Type of Property.</h5>
    </div>
    
    <div className='bg-gray-100 w-full flex flex-col md:flex-row justify-center gap-4 p-5 pb-20'>
      <div className='h-[200px] w-full md:w-[250px] text-center bg-white border rounded pt-5'>
        <img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h1.png" className='h-[80px] w-[80px] mx-auto'/>
        <h3 className='text-lg md:text-xl mt-2 font-bold'>Family House</h3>
        <h6 className='text-md md:text-lg'>122 Property</h6>
      </div>
      <div className='h-[200px] w-full md:w-[250px] text-center bg-white border rounded pt-5'>
        <img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h2.png" className='h-[80px] w-[80px] mx-auto'/>
        <h3 className='text-lg md:text-xl mt-2 font-bold'>House & Villa</h3>
        <h6 className='text-md md:text-lg'>155 Property</h6>
      </div>
      <div className='h-[200px] w-full md:w-[250px] text-center bg-white border rounded pt-5'>
        <img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h3.png" className='h-[80px] w-[80px] mx-auto'/>
        <h5 className='text-lg md:text-xl mt-2 font-bold'>Apartment</h5>
        <h5 className='text-md md:text-lg'>300 Property</h5>
      </div>
      <div className='h-[200px] w-full md:w-[250px] text-center bg-white border rounded pt-5'>
        <img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h4.png" className='h-[80px] w-[80px] mx-auto'/>
        <h4 className='text-lg md:text-xl mt-2 font-bold'>Office & Studio</h4>
        <h5 className='text-md md:text-lg'>80 Property</h5>
      </div>
      <div className='h-[200px] w-full md:w-[250px] text-center bg-white border rounded pt-5'>
        <img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h6.png" className='h-[80px] w-[80px] mx-auto'/>
        <h5 className='text-lg md:text-xl mt-2 font-bold'>Villa & Condo</h5>
        <h5 className='text-md md:text-lg'>80 Property</h5>
      </div>
    </div>
    </>
  )
}

export default PropertyType

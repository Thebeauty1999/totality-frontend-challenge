import React from 'react'

function PropertyType() {
  return (
    <> 
    <div className='bg-gray-100 text-center font-semibold pt-10'> 
    <h1 className='text-5xl '>Featured Property Types</h1>
    <h5 className='text-3xl mt-4 '>Find All Type of Property. </h5>
    </div>
   
    
    <div className='bg-gray-100 h-[90%] w-[full] flex justify-center gap-4 p-5 pb-20'>
        <div className='h-[200px] w-[250px] text-center  bg-white border  rounded pt-5'><img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h1.png" className='h-[80px] w-[80px] ml-20'/>
        <h3 className='text-xl mt-2 font-bold'>Family House</h3>
        <h6 className='text-lg'>122 Property</h6>
        </div>
        <div className='h-[200px] w-[250px]  text-center  bg-white border  rounded pt-5'><img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h2.png" className='h-[80px] w-[80px] ml-20'/>
        <h3 className='text-xl mt-2 font-bold'>House & Villa</h3>
        <h6 className='text-lg'>155 Property</h6>
        </div>
        <div className='h-[200px] w-[250px]  text-center bg-white border  rounded pt-5'><img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h3.png" className='h-[80px] w-[80px] ml-20'/>
        <h5 className='text-xl mt-2 font-bold'>Apartment</h5>
        <h5 className='text-lg'>300 Property</h5>
        </div>
        <div className='h-[200px] w-[250px]  text-center bg-white border  rounded pt-5'><img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h4.png" className='h-[80px] w-[80px] ml-20'/>
        <h4 className='text-xl mt-2 font-bold'>Office & Studio</h4>
        <h5 className='text-lg'>80 Property</h5>
        </div>
        <div className='h-[200px] w-[250px]  text-center bg-white border  rounded pt-5'><img src="https://funny-daffodil-350bc9.netlify.app/images/hero/h6.png" className='h-[80px] w-[80px] ml-20'/>
        <h5 className='text-xl mt-2 font-bold'>Villa & condo</h5>
        <h5 className='text-lg'>80 Property</h5>
        </div>

      
    </div>
    </>
  )
}

export default PropertyType

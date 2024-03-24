import React from 'react'

const Card3 = () => {
  return (
    <div className="lg:w-[40%] w-[90%] rounded-2xl drop-shadow-2xl overflow-hidden px-5 py-5 my-2 bg-white">
    <div className="px-6 py-6">
      <div className="font-bold text-xl mb-2">Volume vs Service Level</div>
    </div>
    <img className="w-full max-h-[200px] max-lg: flex items-center" src="/bargraph.png" alt="Placeholder" />

    <div className="flex justify-between ">
  <div className="flex items-center  pr-2">
    <p className="mr-2 ">Volume <br/>1,135</p>
  </div>
  <div className='border-gray-200 border-r'>

  </div>
  <div className="flex items-center pl-2">
    <p className="ml-2">Services<br/>635</p>
  </div>
</div>

  </div>
  )
}

export default Card3
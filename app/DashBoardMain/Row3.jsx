import React from 'react';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';

const Row3 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 my-4 mx-4 max-md:items-center lg:w-[96%]">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
};

export default Row3;






// import React from 'react';

// function Row3() {
//     return (
//         <section>
//             <div className="w-full z-10 flex-col lg:flex-row justify-center gap-2 mt-3"> {/* Reduced gap */}
//                 <div className="flex flex-col items-center">
//                     <div className="w-29 h-45 rounded-lg shadow-xl"> {/* Card styling */}
//                         {/* Card content */}
//                         <h2 className="text-lg font-semibold"></h2>
//                         <p></p>
//                         <img src="/Top Products.png" className="w-81 h-71" alt="Top Products" />
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <div className="w-80 h-100 rounded-lg shadow-xl"> {/* Card styling */}
//                         {/* Card content */}
//                         <h2 className="text-lg font-semibold"></h2>
//                         <p></p>
//                         <img src="/Sales Mapping.png" className="w-81 h-100" alt="Sales Mapping" />
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <div className="w-81 h-100 rounded-lg shadow-xl"> {/* Card styling */}
//                         {/* Card content */}
//                         <h2 className="text-lg font-semibold"></h2>
//                         <p></p>
//                         <img src="/Volume.png" className="w-81 h-100" alt="Volume" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Row3;
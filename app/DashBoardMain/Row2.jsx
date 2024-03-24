import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
import { FaTicketSimple } from "react-icons/fa6";

export default function Row2() {
  return (
    <section>
      <div className="2nd-row flex gap-5 lg:pt-5 mx-4 max-lg:flex-col max-md:items-center">

        {/* ------------Total Revenue--------------------- */}
        <div className="total-revenue lg:w-[40%] w-[90%] rounded-[20px] shadow-2xl px-5 py-5 max-lg:mt-5">
          <h2 className="text-xl mb-3">Total Revenue</h2>
          <div className="bar-chart max-lg:flex items-center">
            <img src="/image11.png" alt="" className="w-full max-h-[297px] max-lg: flex items-center" /> {/*Add your image here with new data*/}
          </div>
        </div>

        {/* ------------Customer Satisfaction Graph--------------------- */}
        <div className="customer-satisfaction lg:w-[30%] w-[90%] rounded-[20px] shadow-2xl px-5 py-5">
          <h2 className="text-xl mb-3">Customer Satisfaction</h2>
          <div className="bar-chart">
            <img src="/image21.png" alt="" className="w-full max-h-[300px]" /> {/*Add your image here with new data*/}
          </div>
          <hr />
          <div className="bar-details flex justify-center mt-5">
            <div className="px-5">
              <div className="">Last Month</div>
              <div>$3,004</div>
            </div>
            <div className="border-solid border-l-4 border-black h-14"></div>
            <div className="px-5">
              <div>This Month</div>
              <div>$4504</div>
            </div>
          </div>
        </div>

        {/* ------------Total Revenue 2--------------------- */}
        <div className="total-revenue lg:w-[25%] w-[90%] rounded-[20px] shadow-2xl px-5 py-5">
          <h2 className="text-xl mb-3">Total Revenue</h2>
          <div className="bar-chart max-lg:flex items-center">
            <img src="/image31.png" alt="" className="w-full max-h-[150px] m-auto" /> {/*Add your image here with new data*/}
          </div>
          <div className="chart-details w-full mt-5 font-semibold">
            <div className="flex items-center">
              <div><CiShoppingBasket className="w-8 h-8 mr-5 bg-green-400 text-green-700 rounded-md" /></div>
              <div className="w-full flex items-center gap-16">
                <div className="">Reality Sales</div>
                <div className="text-green-400">8.823</div>
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div><FaTicketSimple className="w-8 h-8 mr-5 bg-green-400 text-green-700 rounded-md px-1" /></div>
              <div className="w-full flex items-center gap-16">
                <div className="">Target Sales</div>
                <div className="text-green-400">12.122</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

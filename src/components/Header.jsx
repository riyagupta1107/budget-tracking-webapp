import React from 'react'
// import bell from './assets/bell 1.png'

function Header({income, expense}) {
    const balance = income - expense;
  return (
    <div>
        <div className='bg-gradient-to-b from-card via-greenCustom to-bgCustom flex flex-col w-full h-[35rem] px-10 py-20'>

            <p className='text-customLightText text-lg font-medium font-inter p-0.5'>Good Afternoon,</p>
            <p className=' text-customLightText text-4xl font-semibold font-inter p-0.5'>Riya Gupta</p>
            {/*<img src={bell} className='h-[23.33px] w-[23.33px]'/> */}
            <div className='bg-card h-[16rem] mt-16 border border-none rounded-3xl shadow-lg'>
                <div className='py-6 px-10 text-customLightText font-inter'>
                    <p className='text-base font-semibold p-1'>Total Balance</p>
                    <p className='text-4xl font-bold p-0.5'>${balance}</p>
                </div>

                <div className='flex items-center justify-between px-10 py-5 mt-6 font-inter'>
                    <div className=''>
                        <p className='font-medium p-1'>Income</p>
                        <p className='font-semibold text-xl p-1'>${income}</p>
                    </div>

                    <div className=''>
                        <p className='font-medium p-1'>Expenditure</p>
                        <p className='font-semibold text-xl p-1'>${expense}</p>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Header
import lanche from './assets/Burgers.png'

function Home(){
return (
<>
              <div className="flex left-12 pt-4 bowlby-one-regular">
                 <p className=' top-6 text-2xl'>BURGER HEAVEN</p>
                    <div className="bowlby-one-regular ml-auto">
                        <a href='#' className="text-white hover:text-[#B3A0CD] p-24">ABOUT</a>
                        <a href='#' className="text-white hover:text-[#B3A0CD] p-24">MENU</a>
                        <button className="bg-[#B3A0CD] hover:bg-[#D1EF53] text-black text-md p-4 duration-300 cursor-pointer bowlby-one-regular"> ORDER ONLINE
                        </button>
                    </div>
                </div> 
                 
<div className='mx-auto flex-col justify-center'>
  <h1 className="text-9xl text-center bowlby-one-regular m-35">NEW YORK’S <br /> FAVORITE ORGANIC HAMBURGER JOINT</h1>
      <img src={lanche} alt="Burgers" className='w-full -mt-62 p-20'/>
</div>
</>
        );
}

export default Home;
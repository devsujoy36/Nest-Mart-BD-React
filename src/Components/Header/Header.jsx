
const Header = () => {

 
  return (
    <div className="  rounded border py-2 md:px-10 top-0 w-full ">

      <nav className="max-w-screen-2xl lg:mx-auto mx-10 bg-white  lg:py-4  flex justify-between items-center gap-2 lg:flex-row relative">
        <a id="nav-logo" href="" className=" active:scale-95 transition flex justify-center items-center"> <img
          className="w-8/12 " src='../../../public/assets/svgs/logo.svg' alt="" /> </a>
        <label className="btn btn-circle swap swap-rotate lg:hidden " id="">
          <input type="checkbox" />

          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>


          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        <div id="nav-menu" className="lg:flex lg:flex-row flex-col hidden lg:gap-4 px-2" value="synthwave">
          <a href="#"
            className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 text-emerald-400 hover:-translate-x-1 hover:-translate-y-1 active:scale-90 rounded transition ">Home</a>
          <a href="#for-categories"
            className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 text-emerald-400 hover:-translate-x-1 hover:-translate-y-1 active:scale-90 rounded transition">Categories</a>
          <a href="#nav-for-products"
            className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 text-emerald-400 hover:-translate-x-1 hover:-translate-y-1 active:scale-90 rounded transition">Product</a>
          <a href="#nav-for-daily-best-sell"
            className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 text-emerald-400 hover:-translate-x-1 hover:-translate-y-1 active:scale-90 rounded transition">Best
            Sell </a>
          <a href="#contact-us"
            className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 text-emerald-400 hover:-translate-x-1 hover:-translate-y-1 active:scale-90 rounded transition">Contact
            Us</a>
          <a href="./Pages/Team&Code/code.html"
            className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 text-emerald-400 hover:-translate-x-1 hover:-translate-y-1 active:scale-90 rounded transition">Our
            Team</a>
          <label className="swap swap-rotate">

            <input type="checkbox" className="theme-controller" value="synthwave" />

            <svg className="swap-off h-8 w-8 fill-emerald-500" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg className="swap-on h-8 w-8 fill-emerald-500" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>


      <nav id="nav-menu-for-moble"
        className="flex-col hidden p-4 absolute top-24 -mt-7  right-8 border bg-white  shadow-lg rounded-lg">
        <a href="#"
          className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 hover:bg-emerald-400 text-emerald-400 hover:text-white active:scale-90 rounded transition">Home</a>
        <a href="#for-categories"
          className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 hover:bg-emerald-400 text-emerald-400 hover:text-white active:scale-90 rounded transition">Categories</a>
        <a href="#nav-for-products"
          className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 hover:bg-emerald-400 text-emerald-400 hover:text-white active:scale-90 rounded transition">Product</a>
        <a href="#nav-for-daily-best-sell"
          className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 hover:bg-emerald-400 text-emerald-400 hover:text-white active:scale-90 rounded transition">Best
          Sell </a>
        <a href="#contact-us"
          className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 hover:bg-emerald-400 text-emerald-400 hover:text-white active:scale-90 rounded transition">Contact
          Us</a>
        <a href="./Pages/Team&Code/code.html"
          className="lg:text-lg font-semibold lg:py-2 lg:px-4 px-2 py-1 text-emerald-400 hover:-translate-x-1 hover:-translate-y-1 active:scale-90 rounded transition">Our
          Team</a>
        <label className="swap swap-rotate">

          <input type="checkbox" className="theme-controller" value="synthwave" />

          <svg className="swap-off h-8 w-8  fill-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg className="swap-on h-8 w-8 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </nav>
    </div>
  )
}

export default Header
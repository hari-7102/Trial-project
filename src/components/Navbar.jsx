import { Link } from "react-router-dom"
import Group from '../assets/Group.png'



const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2">
        <div className="flex px-6 items-center gap-1 mx-6">
            <img src={Group} alt=""  />
            <br />
            <h1 className=" font-bold text-xl">Regent</h1>
            
        </div>
        <div className="flex-grow">
            <nav className=" flex justify-start">
                <ul className="flex gap-16  mx-24">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about' >About</Link></li>
                    <li><Link to='/pricing' >Pricing</Link></li>
                    <li><Link to='/blog' >Blog</Link></li>
                </ul>
            </nav>
        </div>
            
        <div>
            <button className="border-2 border-solid rounded-lg p-3 mx-8 my-3 bg-red-200 font-bold  ">Contact Now</button>
        </div>
    </div>
  )
}

export default Navbar
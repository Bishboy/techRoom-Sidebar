import React,{useState } from 'react';
import { FaBars, FaTimes, FaSearch  } from 'react-icons/fa';
import { links, social } from './data';
import { useGlobalContext } from './context';
import logo from './logo/coloredtransparent 1 (1).png'


const Navbar = () =>{

    const { showLinks, setShowLinks} = useGlobalContext();  
   
    const [name, setName] = useState('')
    


    const handleSubmit = (e)=>{
        e.preventDefault();
    }


     return(
        <nav>
            <div className="nav_center">
                <div className="nav_header">
                    <img src={logo} alt='logo'  />
                    <button onClick={()=>setShowLinks(!showLinks)} className="nav_toggle">
                        {showLinks? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <form className="search" onSubmit={handleSubmit}>
                    <div className="search-head">
                       <input type="text" name={name} value={name}
                        onChange={(e)=>setName(e.target.va
                        )} />
                       <button className='special_icon'> 
                       <FaSearch />
                       </button>
                    </div>
                </form>

                <div className= {showLinks? 'links_container show_links_container': 'links_container'} >
                    <ul className="links">
                        {links.map((link)=>{
                            const{id, url, text , icon} = link;
                            return(
                               <li key={id}>
                                <a href={url}>
                                     {icon} 
                                     {text}
                                     
                                </a>
                               </li>
                            )
                        })}
                    </ul>
                </div>

                <ul className="social_icons">
                    {social.map((social)=>{
                        const {id, url, icon} = social;
                        return(
                            <li key={id}>
                                <a href={url} >{icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </nav>
         
     )


}
export default Navbar
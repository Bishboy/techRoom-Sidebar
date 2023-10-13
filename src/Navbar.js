import React,{useState , useEffect, useRef} from 'react';
import { FaBars, FaTwitter, FaSearch } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo/coloredtransparent 1 (1).png'


const Navbar = () =>{
    const [showLinks, setShowLinks] = useState(false)
    const [name, setName] = useState('')
    let linksContainerRef = useRef(null);
    let linkRef = useRef(null)


    useEffect(()=>{
        const linkHeight = linkRef.current.getBoundingClientRect().height
        if(showLinks){
            linksContainerRef.current.style.height=`${linkHeight}px`
        }
        else{
            linksContainerRef.current.style.height =`0px`
        }
    },[showLinks])

    const handleSubmit = (e)=>{
        e.preventDefault();
    }


     return(
        <nav>
            <div className="nav_center">
                <div className="nav_header">
                    <img src={logo} alt='logo'  />
                    <button className="nav_toggle"
                     onClick={()=>setShowLinks(!showLinks)}>
                        <FaBars />
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

                <div className="links_container" ref={linksContainerRef}>
                    <ul className="links" ref={linkRef}>
                        {links.map((link)=>{
                            const{id, url, text} = link;
                            return(
                               <li key={id}>
                                <a href={url}> {text} </a>
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
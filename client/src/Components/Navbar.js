import React from 'react'
import { Link } from 'react-router-dom'
import { Datastate } from '../Context/DataProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const Navbar = () => {

  const { user } = Datastate();
  const  navigate = useNavigate();

  console.log(' user for nav is ',user);

  const logouthandler = () => {
     localStorage.removeItem('user');
     localStorage.removeItem('jwt');
     toast.success(' User has  been  Logged Out ');
     navigate('/login');
  }


  return (
    <> 
        <nav>
            <div class = "nav-wrapper" >
                <Link to = "/" class="brand-logo">  Insight Social Media </Link>
                <ul id = "nav-mobile" class = "right hide-on-med-and-down">

            { user?
             (<>
              <li> <Link to = "/profile">    Profile  </Link> </li>
              <li> <Link to = "/createpost"> CreatePost  </Link>  </li>
              <li>  <button onClick = {logouthandler}>  Logout  </button>  </li>

             </>) : (
               <> 
               <li> <Link to = "/login">     Login  </Link>  </li>
               <li> <Link to = "/signup">     Signup  </Link> </li>
             </>) 
           }
                </ul>
            </div>
    </nav>
    </>
  )
}

export default Navbar
import React, {useContext, useEffect} from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { isAuthenticated, loadUser } = authContext;

  useEffect (() => {
    if (isAuthenticated) {
       loadUser();

    } else {
      navigate('/login'); 
    }  
   
    // eslint-disable-next-line
  }, [] )

  return (
    <div className='grid-2'>
            <div>
                <ContactForm />
            </div>
            <div>
              <ContactFilter />
                <Contacts />
            </div>
        </div>
  )
}

export default Home

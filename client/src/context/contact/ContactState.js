import React, {useReducer} from 'react';
import { v4 as uuid} from 'uuid';

import contactContext from './contactContext'
import ContactReducer from './contactReducer'

import {
   
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT

} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
            id: 1,
            name: 'Abid',
            email: 'abid@gmail.com',
            phone: '222-222-222',
            type: 'personal'
            },
            {
            id: 2,
            name: 'Zain',
            email: 'zain@gmail.com',
            phone: '33-3333-3333',
            type: 'personal'
            },
            {
                id: 3,
                name: 'Umer',
                email: 'umer@gmail.com',
                phone: '4444-4444-444',
                type: 'professional'
                }
        ]
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Add Contacts
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact })
    }
    
   
    //Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id})
    }


     // Set Current Contact
     const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    //Update Contact

    //Filter Contacts

    return (
        <contactContext.Provider
            value={{
                        contacts: state.contacts,
                        current: state.current,
                        addContact,
                        deleteContact,
                        setCurrent,
                        clearCurrent


                    }}
        >
            {props.children}
        </contactContext.Provider>
    )

}

export default ContactState;
import React, {useReducer} from 'react';
import { v4 as uuid} from 'uuid';
import axios from 'axios';
import contactContext from './contactContext'
import contactReducer from './contactReducer'

import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
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

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contacts
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact })
    }
    
   
    //Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id})
    }


    //Set Current Contact

    //Clear Current Contact

    //Update Contact

    //Filter Contacts

    return (
        <contactContext.Provider
            value={{
                        contacts: state.contacts,
                        addContact,
                        deleteContact

                    }}
        >
            {props.children}
        </contactContext.Provider>
    )

}

export default ContactState;
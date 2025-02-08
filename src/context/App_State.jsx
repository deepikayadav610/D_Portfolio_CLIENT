import React, {useState} from 'react';
import { AppContext } from './App_Context';
import axios from 'axios';

const App_State = (props) => {
    
    const url = import.meta.env.VITE_API_URL || "http://localhost:3000/api"; 

    // Contact Us function
    const contact = async (name, email, message) => {
        try {
            const response = await axios.post(
                `${url}/contact`,
                { name, email, message },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error sending message", error);
            return { message: "Failed to send message" }; 
        }
    };

    return (
        <AppContext.Provider value={{ contact }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default App_State;

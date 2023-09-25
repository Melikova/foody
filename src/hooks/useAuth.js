import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useAuth = () => {
    const [user, setUser] = useState(null); 

    useEffect(() => {
        const token = Cookies.get('token');

        if (token) {
            setUser({ token });
        } else {
            setUser(null);
        }
    }, []);


    const login = (token) => {
        Cookies.set('token', token);
        setUser({ token });
    };

    const logout = () => {
        Cookies.remove('token');
        setUser(null);
    };

    return { user, login, logout };
};

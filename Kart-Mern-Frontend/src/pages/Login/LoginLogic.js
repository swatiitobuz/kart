import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { signInUser } from '../../redux/actions/userAction';


export const LoginLogic = () => {
    const { error, userInfo } = useSelector((state) => state.signInUser)


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();



    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        }
    }, [error])



    useEffect(() => {
        if (userInfo) {
            navigate(`/`)
        }
    }, [userInfo,navigate])


    const loginHander = () => {
        if (email && password) {
            dispatch(signInUser(email, password))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields',
            })
        }
    }


    return {
        email,
        setEmail,
        password,
        setPassword,
        loginHander
    }
}
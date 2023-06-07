import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { resetPassword } from '../../redux/actions/userAction'
// import { useSearchParams } from "react-router-dom"
import Swal from "sweetalert2"
export const PassLogic = () => {
    const { userInfo } = useSelector((state) => state.signInUser)
    const { user } = useSelector((state) => state.resetPassword)

    const dispatch = useDispatch();

    const [pass, setpass] = useState("")
    const [confirmpass, setconfirmpass] = useState("")

    const resetPassHandler = () => {
        if (pass && confirmpass) {
            if (pass === confirmpass) {
                dispatch(resetPassword(userInfo._id, pass))
            }
            else {
                Swal.fire({
                    title: 'Password and Confirm Password does not match',
                    icon: 'error'
                })
            }
        }
    }

    useEffect(() => {
        if (user?.success) {
            setpass("")
            setconfirmpass("")
            Swal.fire({
                title: 'Password Updated Successfully',
                icon: 'success'
            })
        }
    }, [user])


    return {
        pass,
        setpass,
        confirmpass,
        setconfirmpass,
        resetPassHandler
    }
}
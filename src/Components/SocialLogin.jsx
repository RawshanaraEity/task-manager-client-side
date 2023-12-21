import { FaGoogle } from "react-icons/fa";

// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";



const SocialLogin = () => {
    const {googleSignIn } = useAuth()
    // const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res => {
            console.log(res.user);
            // const userInfo = {
            //     email: res.user?.email,
            //     name: res.user?.displayName
            // }
            // axiosPublic.post('/users', userInfo)
            // .then(res => {
            //     console.log(res.data)
                navigate('/')
            // })

        })
    }

    return (
        <div className="px-8 pb-8 text-center">
            <div className="divider"></div>
           <div>
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle className="text-green-600"></FaGoogle>
                Google login
            </button>
            </div> 
        </div>
    );
};

export default SocialLogin;
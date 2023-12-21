import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
    const {googleSignIn } = useAuth()
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res => {
            console.log(res.user);
                navigate('/')

        })
    }

    return (
        <div className="px-8 pb-8 text-center">
            <div className="divider"></div>
           <div>
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle className="text-sky-400"></FaGoogle>
                Google login
            </button>
            </div> 
        </div>
    );
};

export default SocialLogin;
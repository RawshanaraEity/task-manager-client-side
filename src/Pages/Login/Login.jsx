
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import SocialLogin from "../SharedPage/socialLogin/SocialLogin";
// import useAuth from "../../Hooks/useAuth";

const Login = () => {
//   const { signIn } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // signIn(email, password).then((result) => {
    //   const user = result.user;
    //   console.log(user);
    //   Swal.fire({
    //     title: "User Logged in successfull",
    //     showClass: {
    //       popup: `
    //                 animate__animated
    //                 animate__fadeInUp
    //                 animate__faster
    //               `,
    //     },
    //     hideClass: {
    //       popup: `
    //                 animate__animated
    //                 animate__fadeOutDown
    //                 animate__faster
    //               `,
    //     },
    //   });
    //   navigate(from, { replace: true });
    // });
  };

  return (
    <div>
     
      <div className=" bg-base-200 py-20">
        <div className="py-20">
          <div className="card  w-96 mx-auto  shadow-2xl bg-base-100">
            <h1 className="text-5xl text-center font-bold pt-5">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-lime-500 text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="px-6 text-xl">
              <small>
                New Here?
                <Link to="/register" className="text-lime-500 font-bold">
                  Create an account
                </Link>
              </small>
            </p>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginLogo from "../../assets/logo-login.svg";
import image from "../../assets/image.png";
import Navbar from "../../components/navbar/Navbar";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState<User>({} as User);

  const userDataInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const login = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (userData.user === "admin@admin.com" && userData.pass === "123456") {
      localStorage["userData"] = JSON.stringify(userData);
      setError(false);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="left col-lg-4 col-md-6 col-sm-12 text-center p-5">
            <img className="icon-img" src={loginLogo} alt="" />
            {error && <div className="alert alert-danger">Bad credentials</div>}
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  name="user"
                  onChange={userDataInput}
                  className="form-control"
                  placeholder="Email address"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="pass"
                  onChange={userDataInput}
                  className="form-control"
                  placeholder="Password"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" onClick={login} className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
          <div className="right col-lg-8 col-md-6 col-sm-12">
            <img src={image} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

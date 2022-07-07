import React from "react";

import TextField from "../../components/TextField";
import PrimaryButton from "../../components/PrimaryButton";

import login from "../../assets/images/coffebg.jpg";

const LoginView = () => {
  return (
    <div className="flex">
      <div className="h-screen w-3/5 block relative items-center justify-center overflow-hidden">
        <img src={login} className="absolute w-full" />
      </div>
      <div className="flex items-center justify-center h-screen w-2/5">
        <div className="flex flex-1 flex-col justify-center items-center w-full h-full">
          <div className="w-2/3">
            <TextField
              onChange={({ target }) => console.log(target.value)}
              label="Email"
              name="Email"
              type="email"
            />
            <TextField
              onChange={() => {}}
              label="Password"
              name="Password"
              type="password"
            />
            <PrimaryButton large label="Sign In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;

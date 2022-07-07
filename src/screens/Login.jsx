import React from "react";
import { Button, Input } from "../components/main";

const Login = () => {
  return (
    <div className="py-24 bg-green-400 flex flex-col gap-4 items-center">
      <h1 className="font-bold text-lg">Giriş Yap</h1>
      <div className="flex flex-col  w-1/5 gap-4 bg-gray-200 px-14 py-8 rounded-lg">
        <Input
          placeholder="Kullanıcı Adı"
          className="px-2 py-2 rounded-lg text-sm font-semibold outline-none border-2 border-transparent transition-colors duration-300 focus:border-gray-800"
        />
        <Input
          type="password"
          placeholder="Şifre"
          className="px-2 py-2 rounded-lg text-sm font-semibold outline-none border-2 border-transparent transition-colors duration-300 focus:border-gray-800"
        />
        <Button>
          <h1>Giriş Yap</h1>
        </Button>
      </div>
    </div>
  );
};

export default Login;

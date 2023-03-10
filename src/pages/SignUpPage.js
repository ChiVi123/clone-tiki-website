import useToggleValue from "../hooks/useToggleValue";
import React, { useEffect } from "react";
import LayoutAnthentication from "../layouts/LayoutAnthentication";
import FormGroup from "../components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IconEyeToggle } from "../components/icons";
import { Button } from "../components/button";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import { toast } from "react-toastify";
import {
  loginByGoogle,
  register,
  resetError,
  setPassword,
} from "../app/features/authSlice";
import GoogleLogin from "react-google-login";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Vui lòng nhập tên tài khoản"),
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Vui lòng nhập email hợp lệ"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(8, "Mật khẩu phải có độ dài tối đa 8 ký tự"),
  })
  .required();

const SignUpPage = () => {
  const { isLoading, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleSignUp = (formValue) => {
    dispatch(setPassword(formValue?.password));
    dispatch(register({ formValue, navigate, toast }));
    if (errorMessage !== null) {
      toast.error(errorMessage);
    }
    dispatch(resetError());
  };
  const handleLoginByGoogle = async (googleData) => {
    await dispatch(loginByGoogle({ token: googleData.tokenId }));
    navigate("/");
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId:
          "1032921802021-3v44l6mpbiikeiqbuo1pn0ji25tsr809.apps.googleusercontent.com",
      });
    });
  }, []);

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue(false);
  return (
    <LayoutAnthentication heading="Xin chào">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-4">
        Nếu đã có tài khoản ?{"  "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Đăng nhập
        </Link>
      </p>
      <div
        className="flex items-center justify-center w-full py-3  text-base font-semibold 
       rounded-lg gap-x-3 text-text2 dark:text-white dark:border-darkStroke"
      >
        <GoogleLogin
          clientId="1032921802021-3v44l6mpbiikeiqbuo1pn0ji25tsr809.apps.googleusercontent.com"
          buttonText="Đăng nhập bằng Google"
          onSuccess={handleLoginByGoogle}
          onFailure={() => alert("Đăng nhập không thành công")}
          // onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm text-text2 lg:mb-8 dark:text-white">
        Hoặc đăng nhập bằng email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)} method="post">
        <FormGroup>
          <Label htmlFor="name">Tên tài khoản *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            autoComplete="off"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
            autoComplete="off"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <Button type="submit" className="w-full bg-darkRed">
          {isLoading ? (
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent"></div>
          ) : (
            "Đăng ký"
          )}
        </Button>
      </form>
    </LayoutAnthentication>
  );
};

export default SignUpPage;

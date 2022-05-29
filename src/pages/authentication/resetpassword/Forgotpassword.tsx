import React, { useState, useRef, useEffect } from "react";
import styles from "./forgotpassword.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdEmail } from "react-icons/md";
import { IoLogoTwitter, IoMdPartlySunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { BASE_URL, HTTPCODE } from "../../../constants/contants";
import { storeUser } from "../../../hooks/useLogin";
import { BeatLoader } from "react-spinners";

import Swal from "sweetalert2";

const url: string = `${BASE_URL}api/v1/reset/forgotpassword`;

const Login = (): JSX.Element => {
  const [isLight, setIsLight] = useState(true);
  const [form, setForm] = useState<any>({ email: "" });
  const [loadingMsg, setloadingMsg] = useState<string>("");

  const focusPoint = useRef<HTMLInputElement>(null);

  const setLightMode = () => {
    setIsLight(!isLight);
    return document.body.classList.toggle(`${styles.darkMode}`);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setloadingMsg("loading");

    if (!form.email) {
      setloadingMsg("");

      focusPoint.current!.style.border = "1.5px solid red";
      setTimeout(
        () => (focusPoint.current!.style.border = "1px solid red"),
        3000
      );
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (HTTPCODE.success.includes(response.status)) {
        setloadingMsg("");
        const data = await response.json();
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Please Check your email",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.href="login";
        }, 2000);
      }
      if (HTTPCODE.bad.includes(response.status)) {
        setloadingMsg("");

        Swal.fire({
          icon: "error",
          title: "Account not found",
          showConfirmButton: false,
          timer: 2500,
        });
      }
      console.log(response);
    } catch (err: any) {
      console.error(err);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name: string = e.currentTarget.name;
    let value: string = e.currentTarget.value;
    const newData = { ...form, [name]: value };
    console.log(form);

    setForm(newData);
  };
  useEffect(() => {
    if (focusPoint.current) {
      focusPoint.current.focus();
      return;
    }
  }, [focusPoint]);
  return (
    <div className="">
      <div className={styles["box-container"]}>
        {!isLight && (
          <IoMdPartlySunny
            className={`${styles.sun} ${styles.fillsun}`}
            onClick={setLightMode}
          />
        )}
        {isLight && (
          <BsMoonStarsFill
            className={`${styles.sun} ${styles.fillmoon}`}
            onClick={setLightMode}
          />
        )}
        <div className={styles["logo-head"]}>
          <IoLogoTwitter />
          <h4>Tweeter</h4>
        </div>
        <h2>Forgot Password</h2>
        <div className={styles.form}>
          <div className={styles["format-box"]}>
            <MdEmail className={styles["email-icon"]} />
            <input
              type="email"
              value={form.email}
              ref={focusPoint}
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <button onClick={handleSubmit}>
            {loadingMsg === "loading" && <BeatLoader color="#2F80ED" />}
            {loadingMsg !== "loading" && "Reset password"}
          </button>
        </div>
        <p>
          Don't have an account yet? <a href="/signup">Register </a>
        </p>
        <p className={styles["forget-password"]}>
          <a href="/forgot-password">Forget password?</a>
        </p>
      </div>
    </div>
  );
};
export default Login;

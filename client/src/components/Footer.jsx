import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleAuthProvider } from "../firebase/config";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, googleAuthProvider);

      localStorage.setItem("token", res.user.accessToken);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/admin");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <footer className="bg-customRed text-white text-center p-4">
      © MTL Dynamique 2024 |{" "}
      <a href="/privacy-policy" className="">
        {t("common.footer.privacy")}
      </a>{" "}
      |{" "}
      <a href="/terms-of-use" className="">
        {t("common.footer.terms")}{" "}
      </a>
      <Link onClick={handleGoogleSignIn} to="" className="">
        Admin
      </Link>
    </footer>
  );
};

export default Footer;

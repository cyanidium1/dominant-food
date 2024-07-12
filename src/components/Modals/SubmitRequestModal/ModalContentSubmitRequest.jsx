"use client";

import { useState, useMemo } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import ChooseOption from "./ChooseOption";
import "react-toastify/dist/ReactToastify.css";

import useStore from "@/zustand/store/useStore";
import { sendMessage } from "@/utils/sendMsg";

const validateEmail = (email) => {
  const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  const re = /^\+\d+$/;
  return re.test(phone);
};

const ModalContentSubmitRequest = ({ onClose, context }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("buy");
  const [errors, setErrors] = useState({});

  const { translations } = useStore();

  const isInvalidEmail = useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email]);

  const isInvalidPhone = useMemo(() => {
    if (phone === "") return false;
    return !validatePhone(phone);
  }, [phone]);

  const validateForm = () => {
    const newErrors = [];
    if (isInvalidPhone) newErrors.phone = translations.Form.validPhone;
    if (isInvalidEmail) newErrors.email = translations.Form.validEmail;

    setErrors(newErrors);
    console.log("New Errors:", newErrors);
    console.log("State Errors before:", errors);
    console.log("State Errors after:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitSuccess = () => {
    toast.success(translations.Form.toastSuccess, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const onSubmitFailure = () => {
    toast.error(translations.Form.toastFailure, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit triggered");

    if (!validateForm()) {
      console.log("Validation failed");
      onSubmitFailure();
      return;
    }

    console.log("Validation passed");

    let formData = {
      name,
      phone,
      email,
      message,
    };

    if (context === "sideBar") {
      formData = {
        ...formData,
        selectedOption,
      };
    } else if (context === "objectPage") {
      formData = {
        ...formData,
        pageURL: `${window.location.href}`,
      };
    }

    const formattedMessage = `${formData.name ? formData.name : 'Имя не указано'} заинтересован в ${formData?.selectedOption ? formData.selectedOption : ''} ${formData?.pageURL ? formData.pageURL : ''}. Телефон: ${formData.phone}${formData.email ? ', email: ' + formData.email : ''}${formData.message ? ', сообщение: ' + formData.message : ''}`;

    console.log("Sending data:", formData);

    try {
      sendMessage(formattedMessage);

      onSubmitSuccess();

    } catch (error) {
      console.error("Error sending message:", error);
      onSubmitFailure();
    }

    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label={translations.Form.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={translations.Form.namePlaceholder}
          variant="bordered"
          errorMessage={errors.name}
          fullWidth
          className="mb-5"
          classNames={{
            input: [
              "bg-transparent",
              "text-black dark:text-slate-400",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
          }}
        />
        <Input
          label={translations.Form.phone}
          value={phone}
          type="tel"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder={translations.Form.phonePlaceholder}
          variant="bordered"
          isInvalid={isInvalidPhone}
          color={isInvalidPhone ? "danger" : "success"}
          errorMessage={errors.phone}
          fullWidth
          isRequired
          className="mb-5"
          classNames={{
            input: [
              "bg-transparent",
              "text-black dark:text-slate-400",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
          }}
        />
        <Input
          label={translations.Form.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={translations.Form.emailPlaceholder}
          variant="bordered"
          isInvalid={isInvalidEmail}
          color={isInvalidEmail ? "danger" : "success"}
          errorMessage={errors.email}
          fullWidth
          className="mb-5"
          classNames={{
            input: [
              "bg-transparent",
              "text-black dark:text-slate-400",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
          }}
        />
        {context === "sideBar" && (
          <ChooseOption type={selectedOption} setType={setSelectedOption} />
        )}
        <Textarea
          label={translations.Form.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={translations.Form.textareaPlaceholder}
          variant="bordered"
          errorMessage={errors.message}
          fullWidth
          classNames={{
            input: [
              "bg-transparent",
              "text-black dark:text-slate-400",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
          }}
        />
        <Button
          type="submit"
          className="mt-4 bg-customGreen text-white shadow-lg"
          fullWidth
        >
          {translations.Modal.submit}
        </Button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default ModalContentSubmitRequest;

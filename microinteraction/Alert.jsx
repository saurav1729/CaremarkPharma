import React from "react";
import { Toaster, toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { blue } from "@mui/material/colors";

const Alert = ({ type, message, position, duration, style }) => {
  const notify = () => {
    const defaultStyle = {
      borderRadius: "5px",
      padding: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      fontSize: "16px",
    };

    const mobileStyle =
      window.innerWidth <= 768
        ? {
            marginBottom: "2rem",
          }
        : {};

    const options = {
      duration: duration || 5000,
      style: { ...defaultStyle, ...style, ...mobileStyle },
      position: position || "top-right",
    };

    // Directly show the appropriate toast
    switch (type) {
      case "success":
        toast.success(message, {
          ...options,
          style: {
            ...defaultStyle,
            ...style,
            ...mobileStyle,
            border: "1.5px solid green",
            backgroundColor: "#d3f9d3",
            color: "#198754",
          },
        });
        break;
      case "error":
        toast.error(message, {
          ...options,
          style: {
            ...defaultStyle,
            ...style,
            ...mobileStyle,
            border: "1.5px solid red",
            backgroundColor: "#FADADD",
            color: "red",
          },
        });
        break;
      case "info":
        toast(message, {
          ...options,
          style: {
            ...defaultStyle,
            ...style,
            ...mobileStyle,
            border: "1.5px solid orange",
            backgroundColor: "#fff3cd",
            color: "#856404",
          },
        });
        break;
      case "warning":
        toast(message, {
          ...options,
          style: {
            ...defaultStyle,
            ...style,
            ...mobileStyle,
            border: "1.5px solid orange",
            backgroundColor: "#fff3cd",
            color: "#856404",
          },
        });
        break;
      case "infoOmega":
        toast(message, {
          ...options,
          style: {
            ...defaultStyle,
            ...style,
            ...mobileStyle,
            border: "1.5px solid #0171e3d6",
            backgroundColor: "white",
            color: "#0171e3d6",
          },
        });
        break;
      default:
        toast(message, {
          ...options,
          style: {
            ...defaultStyle,
            ...style,
            ...mobileStyle,
          },
        });
        break;
    }
  };

  if (message) {
    notify();
  }

  return <Toaster position={position || "top-right"} />;
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  position: PropTypes.string,
  duration: PropTypes.number,
  style: PropTypes.object,
};

export default Alert;


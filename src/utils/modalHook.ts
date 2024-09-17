/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";

export const Success_model = (message: any) => {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: message.title || "Successfully!!!",
    text: message.text || "",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const Error_Modal = (message: any) => {
  return Swal.fire({
    position: "center",
    icon: "error",
    title: message?.title || message || "Failed!!!",
    text: message?.text || "",
    showConfirmButton: false,
    timer: 1500,
  });
};

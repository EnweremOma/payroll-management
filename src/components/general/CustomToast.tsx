import { ToastProps } from "../../interfaces/General";
import { Slide, toast } from "react-toastify";

export const successToast = ({ message, position }: ToastProps) => {
  return toast.success(message, {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    className: " dark:bg-backgroundDark dark:text-white",
  });
};

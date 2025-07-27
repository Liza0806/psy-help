import { useEffect } from "react";

const GlobalErrorCatcher = () => {
  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      console.error("Global Error Caught:", event.error || event.message);
      // Перенаправить пользователя на страницу ошибки:
      window.location.href = "/psy-help/error";
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled Promise Rejection:", event.reason);
      window.location.href = "/psy-help/error";
    };

    window.addEventListener("error", handleGlobalError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleGlobalError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return null;
};

export default GlobalErrorCatcher;

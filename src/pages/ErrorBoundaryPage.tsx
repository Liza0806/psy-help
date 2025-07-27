import { Link } from "react-router-dom";
import cls from "./ErrorBoundaryPage.module.scss";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../locales/translations";

const ErrorBoundaryPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={cls.wrapper}>
      <h1>{t.errorTitle}</h1>
      <p>{t.errorMessage}</p>
      <Link to="/" className={cls.button}>
        {t.backHome}
      </Link>
    </div>
  );
};

export default ErrorBoundaryPage;

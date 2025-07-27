import cls from "./Loader.module.scss";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../locales/translations";

const Loader = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={cls.loaderWrapper}>
      <div className={cls.circle}></div>
      <div className={cls.circle}></div>
      <div className={cls.text}>{t.chargingTheDayForSuccess}</div>
    </div>
  );
};

export default Loader;


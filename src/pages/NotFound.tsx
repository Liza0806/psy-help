import { useNavigate } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import cls from "./NotFound.module.scss";
import Button from "../components/Button";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../locales/translations";

const NotFound = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={cls.wrapper}>
      <PageMeta
        title={
          Array.isArray(t.metaTitleNotFound)
            ? t.metaTitleNotFound.join(" ")
            : t.metaTitleNotFound
        }
        description={
          Array.isArray(t.metaDescriptionNotFound)
            ? t.metaDescriptionNotFound.join(" ")
            : t.metaDescriptionNotFound
        }
        noindex={true}
      />
      <h1 className={cls.title}>{t.titleNotFound}</h1>
      <p className={cls.description}>{t.descriptionNotFound}</p>
      <div className={cls.buttons}>
        <Button
          text={
            Array.isArray(t.homeButtonNotFound)
              ? t.homeButtonNotFound.join(" ")
              : t.homeButtonNotFound
          }
          onClick={() => navigate("/")}
        />
        <Button
          text={
            Array.isArray(t.backButtonNotFound)
              ? t.backButtonNotFound.join(" ")
              : t.backButtonNotFound
          }
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default NotFound;

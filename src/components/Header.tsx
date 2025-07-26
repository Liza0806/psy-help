import { NavLink } from "react-router-dom";
import cls from "./Header.module.scss";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

export const Header = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className={cls.header}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? `${cls.link} ${cls.active}` : cls.link
          }
        >
          {t('header.home')}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? `${cls.link} ${cls.active}` : cls.link
          }
        >
          {t('header.about')}
        </NavLink>
        <NavLink
          to="/howWeWillWork"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? `${cls.link} ${cls.active}` : cls.link
          }
        >
          {t('header.howWeWillWork')}
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? `${cls.link} ${cls.active}` : cls.link
          }
        >
          {t('header.contacts')}
        </NavLink>
      </nav>
      <div className={cls.languageSwitcher}>
        {['UA', 'RU', 'EN'].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang as 'UA' | 'RU' | 'EN')}
            className={language === lang ? cls.active : ''}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

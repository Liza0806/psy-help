import { useTranslation } from '../hooks/useTranslation';
import cls from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cls.footer}>
      <div className={cls.container}>
        <p>{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
        <p>{t('footer.subtitle')}</p>
        <a href="tel:+380XXXXXXXXX">+38 (0XX) XXX-XX-XX</a>
      </div>
    </footer>
  );
};

export default Footer;

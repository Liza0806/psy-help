import { useTranslation } from '../hooks/useTranslation';
import cls from './Footer.module.scss';
import { FaTelegramPlane, FaViber, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cls.footer} id="footer">
      <div className={cls.container}>
        <div className={cls.contacts}>
          <p>{t('footerContactTitle')}</p>
          <a href="tel:+380XXXXXXXXX">+38 (0XX) XXX-XX-XX</a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope /> your-email@example.com
          </a>
          <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane /> Telegram
          </a>
          <a href="viber://chat?number=%2B380XXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <FaViber /> Viber
          </a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>

        <div className={cls.bottomInfo}>
          <p>{t('footerSubtitle')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

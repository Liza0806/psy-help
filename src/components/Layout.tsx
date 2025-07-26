import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Helmet } from 'react-helmet-async';
import cls from "./Layout.module.scss";
import Footer from './Footer';
import { useTranslation } from '../hooks/useTranslation';

const Layout = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      <Header />
      <main className={cls.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

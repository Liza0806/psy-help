import { useTranslation } from '../hooks/useTranslation';
import Button from './Button';
import cls from './AboutMini.module.scss';

const AboutMini = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.wrapper}>
      <h2>{t('aboutMini.title')}</h2>
      <div className={cls.infoWrapper}>
        <div className={cls.photo}></div>
        <div className={cls.info}>
          <article>
            <p>{t('aboutMini.paragraph1')}</p>
            <p>{t('aboutMini.paragraph2')}</p>
            <p>{t('aboutMini.paragraph3')}</p>
            <p>{t('aboutMini.paragraph4')}</p>
          </article>
          <Button text={t('button.learnMore')} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default AboutMini;

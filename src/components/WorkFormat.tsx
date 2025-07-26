import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import cls from "./WorkFormat.module.scss";
import Button from "./Button";
import { useTranslation } from "../hooks/useTranslation";

const WorkFormat = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <section className={cls.wrapper} ref={ref}>
      <h2>{t('workFormat.title')}</h2>
      <div className={cls.description}>
        <p>{t('workFormat.paragraph1')}</p>
        <p>{t('workFormat.paragraph2')}</p>
      </div>

      <div className={cls.services}>
        <div className={`${cls.serviceCard} ${visible ? cls.visible : ""}`}>
          <h3>{t('workFormat.individualTitle')}</h3>
          <p>{t('workFormat.individualDescription')}</p>
          <div className={cls.price}>
            {t('workFormat.individualPrice')}
          </div>
        </div>

        <div className={`${cls.serviceCard} ${visible ? cls.visible : ""}`}>
          <h3>{t('workFormat.familyTitle')}</h3>
          <p>{t('workFormat.familyDescription1')}</p>
          <p>{t('workFormat.familyDescription2')}</p>
          <div className={cls.price}>
            {t('workFormat.familyPrice')}
          </div>
        </div>
      </div>

      <Button text={t('workFormat.button')} onClick={() => {}} />
    </section>
  );
};

export default WorkFormat;

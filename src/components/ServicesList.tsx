import Button from "./Button";
import cls from "./ServicesList.module.scss";
import { useTranslation } from "../hooks/useTranslation";

const ServicesList = () => {
  const { t } = useTranslation();

  return (
    <section className={cls.wrapper}>
      <h2>{t('servicesList.title')}</h2>
      <div className={cls.categories}>
        <div className={cls.category}>
          <h3>{t('servicesList.personalProblems')}</h3>
          <ul>
            <li>{t('servicesList.personal.item1')}</li>
            <li>{t('servicesList.personal.item2')}</li>
            <li>{t('servicesList.personal.item3')}</li>
            <li>{t('servicesList.personal.item4')}</li>
            <li>{t('servicesList.personal.item5')}</li>
            <li>{t('servicesList.personal.item6')}</li>
            <li>{t('servicesList.personal.item7')}</li>
          </ul>
        </div>
        <div className={cls.category}>
          <h3>{t('servicesList.relationshipProblems')}</h3>
          <ul>
            <li>{t('servicesList.relationship.item1')}</li>
            <li>{t('servicesList.relationship.item2')}</li>
            <li>{t('servicesList.relationship.item3')}</li>
            <li>{t('servicesList.relationship.item4')}</li>
            <li>{t('servicesList.relationship.item5')}</li>
            <li>{t('servicesList.relationship.item6')}</li>
            <li>{t('servicesList.relationship.item7')}</li>
          </ul>
        </div>
        <div className={cls.category}>
          <h3>{t('servicesList.mentalDisorders')}</h3>
          <ul>
            <li>{t('servicesList.mental.item1')}</li>
            <li>{t('servicesList.mental.item2')}</li>
            <li>{t('servicesList.mental.item3')}</li>
            <li>{t('servicesList.mental.item4')}</li>
            <li>{t('servicesList.mental.item5')}</li>
            <li>{t('servicesList.mental.item6')}</li>
          </ul>
        </div>
      </div>
      <Button text={t('servicesList.button')} onClick={() => {}} />
    </section>
  );
};

export default ServicesList;

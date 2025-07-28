import Button from "./Button";
import cls from "./Hero.module.scss";
import HeroLeft from "./HeroLeft";
import { useTranslation } from "../hooks/useTranslation";
import { useModalContext } from "../context/ModalContext";

const Hero = () => {
  const { t } = useTranslation();
  const { openModal } = useModalContext();

  return (
    <>
      <div className={cls.info}>
        <h1>{t("hero.name")}</h1>
        <h3>{t("hero.subtitle")}</h3>
        <ul className={cls.abilities}>
          <li>{t("hero.ability.psychiatrist")}</li>
          <li>{t("hero.ability.psychotherapist")}</li>
          <li>{t("hero.ability.narcologist")}</li>
          <li>{t("hero.ability.hypnologist")}</li>
        </ul>
        <Button text={t("button.bookAppointment")} onClick={openModal} />
      </div>
      <HeroLeft />
    </>
  );
};

export default Hero;

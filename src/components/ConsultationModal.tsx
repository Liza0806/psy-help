import { useState, useEffect } from 'react';
import cls from './ConsultationModal.module.scss';
import { useModalContext } from '../context/ModalContext';
import { useTranslation } from '../hooks/useTranslation';
import clsx from 'clsx';

export default function ConsultationModal() {
  const { isModalOpen, closeModal } = useModalContext();
  const { t } = useTranslation();

  const [isMounted, setIsMounted] = useState(false); // рендер в DOM
  const [isVisible, setIsVisible] = useState(false); // классы fadeIn/fadeOut

  useEffect(() => {
    if (isModalOpen) {
      setIsMounted(true);
      requestAnimationFrame(() => {
        // requestAnimationFrame — это специальный метод браузера, который говорит:
//"выполни этот кусочек кода перед самой ближайшей отрисовкой экрана."
        setIsVisible(true);
      });
    } else if (isMounted) {
      setIsVisible(false);
      setTimeout(() => {
        setIsMounted(false);
      }, 300); // Совпадает с длительностью fadeOut
    }
  }, [isModalOpen]);

  if (!isMounted) return null; // Удаляем модалку из DOM полностью после закрытия

  return (
    <div
      className={clsx(
        cls.modalOverlay,
        isVisible ? cls.fadeIn : cls.fadeOut
      )}
    >
      <div className={cls.modalContent}>
        <h2>{t("modal.ask")}</h2>
        <div className={cls.buttonGroup}>
          <a
            href="https://t.me/yourTelegramUsername"
            target="_blank"
            rel="noopener noreferrer"
            className={cls.actionButton}
          >
            Telegram
          </a>
          <a
            href="viber://chat?number=%2B380XXXXXXXXX"
            className={cls.actionButton}
          >
            Viber
          </a>
          <a href="tel:+380XXXXXXXXX" className={cls.actionButton}>
            {t("modal.call")}
          </a>
        </div>
        <button className={cls.closeButton} onClick={closeModal}>
          {t("modal.close")}
        </button>
      </div>
    </div>
  );
}

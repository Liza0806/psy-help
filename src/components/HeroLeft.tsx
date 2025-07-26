import cls from "./HeroLeft.module.scss";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../locales/translations";

const HeroLeft = () => {
  const { language } = useLanguage();

  const heroWords = translations[language].heroWords;

  // Разбиваем слова на строки (по 8 штук в строку)
  const wordRows = [];
  for (let i = 0; i < heroWords.length; i += 8) {
    wordRows.push(heroWords.slice(i, i + 8));
  }

  const duplicatedRows = wordRows.flatMap((row) => [row, row]); // дублируем каждую строку дважды

  return (
    <div className={cls.skyBackground}>
      {duplicatedRows.map((words, index) => (
        <div className={cls.wordRow} key={index}>
          <div className={cls.wordTrack}>
            {Array.isArray(words)? words.map((word: string, idx: number) => (
              <span key={idx}>{word}</span>
            )) :  <span ></span> }
          </div>
        </div>
        
      ))}
        {duplicatedRows.map((words, index) => (
        <div className={cls.wordRow} key={index}>
          <div className={cls.wordTrack}>
            {Array.isArray(words)? words.map((word: string, idx: number) => (
              <span key={idx}>{word}</span>
            )) :  <span ></span> }
          </div>
        </div>
        
      ))}
        {duplicatedRows.map((words, index) => (
        <div className={cls.wordRow} key={index}>
          <div className={cls.wordTrack}>
            {Array.isArray(words)? words.map((word: string, idx: number) => (
              <span key={idx}>{word}</span>
            )) :  <span ></span> }
          </div>
        </div>
        
      ))}
        {duplicatedRows.map((words, index) => (
        <div className={cls.wordRow} key={index}>
          <div className={cls.wordTrack}>
            {Array.isArray(words)? words.map((word: string, idx: number) => (
              <span key={idx}>{word}</span>
            )) :  <span ></span> }
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default HeroLeft;

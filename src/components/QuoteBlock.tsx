import cls from './QuoteBlock.module.scss';

type QuoteBlockProps = {
  text: string;
  isVisible: boolean;
};

const QuoteBlock: React.FC<QuoteBlockProps> = ({ text, isVisible }) => {
  return (
    <div className={`${cls.overlay} ${isVisible ? cls.visible : ''}`}>
      <blockquote className={cls.text}>{text}</blockquote>
    </div>
  );
};

export default QuoteBlock;

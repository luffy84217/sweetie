interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={"bg-white rounded-lg shadow p-4 " + className}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  className: '',
};

export default Card;

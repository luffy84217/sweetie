interface ContainerProps {
  className?: string;
}

const Container = Object.create(null);

const Wide: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={'container mx-auto px-4 sm:px-6 lg:px-8 ' + className}>{children}</div>
  );
};

Wide.defaultProps = {
  className: '',
};

const Narrow: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className={'max-w-3xl py-4 sm:py-6 lg:py-8 mx-auto ' + className}>{children}</div>
    </div>
  );
};

Narrow.defaultProps = {
  className: '',
};

export default Object.assign(Container, {
  Wide,
  Narrow,
});

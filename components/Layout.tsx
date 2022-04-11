import Footer from "./Footer";

const Layout: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  ...htmlProps
}) => {
  return (
    <div {...htmlProps}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

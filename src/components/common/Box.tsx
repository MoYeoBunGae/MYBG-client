interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return <div className={`bg-white p-4 rounded-sm shadow-second ${className}`}>{children}</div>;
};

export default Box;

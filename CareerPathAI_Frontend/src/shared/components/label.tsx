type LabelProps = {
  children: React.ReactNode;
};

const Label = ({ children }: LabelProps) => {
  return <label className="text-sm text-gray-600">{children}</label>;
};

export default Label;
type Props = {
  technology: {
    tech: string;
    bgColor?: string; //--> kalo null dikasih nilai default "#f8ff1e" dari FE nya
    fontColor?: string; //--> kalo null dikasih nilai default "black" dari FE nya
  };
};

const Technology = ({ technology }: Props) => {
  const blackFontColor = 'black';
  const yellowButtonColor = '#f8ff1e';

  const style = {
    background: `${technology.bgColor ?? yellowButtonColor}`,
    color: `${technology.fontColor ?? blackFontColor}`,
  };

  return (
    <div className="border-effect" style={style}>
      {technology.tech}
    </div>
  );
};

export default Technology;

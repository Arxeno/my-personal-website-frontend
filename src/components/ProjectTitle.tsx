type Props = {
  isGradient: boolean;
  colors: string[];
  websiteLink: string;
  title: string;
  fontColor?: string;
  number: number;
};

const ProjectTitle = ({
  isGradient,
  colors,
  websiteLink,
  title,
  fontColor,
  number,
}: Props) => {
  const blackFontColor = 'black';

  if (isGradient) {
    const style = {
      backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
      color: `${fontColor ?? blackFontColor}`,
    };

    return (
      <a
        className="button-effect project-title"
        href={websiteLink}
        target="_blank"
        style={style}
      >
        {number} {title}
      </a>
    );
  } else {
    const numberStyle = {
      backgroundColor: `${colors[0]}`,
      color: `${fontColor ?? blackFontColor}`,
      marginRight: '10px',
    };

    const titleStyle = {
      backgroundColor: `${colors[1]}`,
      color: `${fontColor ?? blackFontColor}`,
    };

    return (
      <a href={websiteLink} target="_blank">
        <span className="button-effect project-title" style={numberStyle}>
          {number}
        </span>
        <span className="button-effect project-title" style={titleStyle}>
          {title}
        </span>
      </a>
    );
  }
};

export default ProjectTitle;

import CONFIG from '../config';

type Props = {
  skillData: {
    name: string;
    imageLink: string;
    alt: string;
  };
};

const Skill = ({ skillData }: Props) => {
  return (
    <figure>
      <img
        src={`${CONFIG.BACKEND_URL}/${skillData.imageLink}`}
        alt={skillData.alt}
      />
      <figcaption>{skillData.name}</figcaption>
    </figure>
  );
};

export default Skill;

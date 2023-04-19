import CONFIG from '../config';

type Props = {
  serviceData: {
    name: string;
    imageLink: string;
    alt: string;
  };
};

const Service = ({ serviceData }: Props) => {
  return (
    <figure>
      <img src={`${serviceData.imageLink}`} alt={serviceData.alt} />
      <figcaption>{serviceData.name}</figcaption>
    </figure>
  );
};

export default Service;

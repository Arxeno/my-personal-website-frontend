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
      <img
        src={`${CONFIG.BACKEND_URL}/${serviceData.imageLink}`}
        alt={serviceData.alt}
      />
      <figcaption>{serviceData.name}</figcaption>
    </figure>
  );
};

export default Service;

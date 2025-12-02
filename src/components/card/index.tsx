import Image, { StaticImageData } from "next/image";
import { Heading } from "../heading";
import Paragraph from "../paragraph";

interface CardProps {
  icon?: string;
  image?: StaticImageData;
  title: string;
  description?: string;
}

export default function Card({ icon, image, title, description }: CardProps) {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      {image && (
        <div className="service-image">
          <Image src={image} alt={title} className="service-image" />
        </div>
      )}
      <div className="service-content">
        <Heading as="h3" variant="h3" className="h3">
          {title}
        </Heading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
}

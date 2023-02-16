import "./Image.scss"

export interface ImageProps {
  src: string;
  variant: "sm" | "md" | "lg";
  alt: string;
}

export const Image: React.FC<ImageProps> = ({src, variant, alt}) => {
    return <img className={`image ${variant}`} src={src} alt={alt} />
}

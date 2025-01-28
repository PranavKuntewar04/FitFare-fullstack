import { ReactComponent as BlankStar } from '../../assets/pre-register/stars/blankStar.svg';
import { ReactComponent as SignUpPic } from '../../assets/pre-register/signup.svg';

const DynamicSVG = ({ icon, alt = "SVG Icon", className = "" }) => {
  const icons = {
    blankStar: BlankStar,
    signuppic: SignUpPic,
  };

  const Icon = icons[icon];

  if (!Icon) {
    return <div>SVG not found!</div>;
  }

  return (
    <div className={` w-full h-full ${className}`}>
      <Icon
        className="w-full h-full object-cover"
        alt={alt}
      />
    </div>
  );
};

export default DynamicSVG;
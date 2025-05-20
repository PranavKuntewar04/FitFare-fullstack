const OnboardingIllustration = () => {
  return (
    <div className="relative h-64 md:h-80">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="200" cy="200" r="130" fill="#ABECD6" opacity="0.5" />
        
        {/* Man with dumbbell */}
        <rect x="130" y="150" width="60" height="100" rx="20" fill="#33CC99" />
        <circle cx="160" cy="130" r="25" fill="#F2CD5C" />
        <rect x="145" y="150" width="30" height="50" rx="10" fill="#33CC99" />
        <rect x="100" y="180" width="30" height="10" rx="5" fill="#333333" />
        <rect x="190" y="180" width="30" height="10" rx="5" fill="#333333" />
        <circle cx="100" cy="185" r="10" fill="#666666" />
        <circle cx="220" cy="185" r="10" fill="#666666" />
        
        {/* Woman with barbell */}
        <rect x="250" y="150" width="50" height="90" rx="15" fill="#FFFFFF" />
        <circle cx="275" cy="130" r="22" fill="#F2CD5C" />
        <rect x="260" y="150" width="30" height="40" fill="#000000" />
        <rect x="220" y="200" width="120" height="10" rx="5" fill="#333333" />
        <circle cx="220" cy="205" r="15" fill="#666666" />
        <circle cx="340" cy="205" r="15" fill="#666666" />
        
        {/* Gym elements */}
        <rect x="100" y="250" width="300" height="10" fill="#CCCCCC" />
        <rect x="120" y="260" width="10" height="20" fill="#CCCCCC" />
        <rect x="370" y="260" width="10" height="20" fill="#CCCCCC" />
      </svg>
    </div>
  );
};

export default OnboardingIllustration;
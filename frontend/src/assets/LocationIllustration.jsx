const LocationIllustration = () => {
  return (
    <div className="relative h-64 md:h-80">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="100" y="50" width="200" height="400" rx="20" fill="#FFFFFF" stroke="#000000" strokeWidth="5" />
        <rect x="110" y="60" width="180" height="170" rx="10" fill="#CCCCCC" />
        
        {/* Map elements */}
        <rect x="120" y="70" width="160" height="150" fill="#E6F7FF" />
        <path d="M150,100 L200,90 L250,120 L170,180 Z" fill="#CCCCCC" stroke="#999999" />
        <path d="M120,180 L160,170 L170,200 L130,210 Z" fill="#CCCCCC" stroke="#999999" />
        <path d="M250,100 L270,95 L280,130 L260,140 Z" fill="#CCCCCC" stroke="#999999" />
        
        {/* Roads */}
        <path d="M120,120 L280,120" stroke="#999999" strokeWidth="3" />
        <path d="M200,70 L200,220" stroke="#999999" strokeWidth="3" />
        
        {/* Location pin */}
        <circle cx="200" cy="120" r="10" fill="#FF4444" />
        <path d="M200,120 L200,95" stroke="#FF4444" strokeWidth="5" />
        <circle cx="200" cy="95" r="15" fill="#FF4444" />
        <circle cx="200" cy="95" r="5" fill="#FFFFFF" />
        
        {/* Person */}
        <circle cx="250" cy="250" r="30" fill="#F2CD5C" />
        <rect x="240" y="280" width="20" height="60" fill="#FF6666" />
        <rect x="220" y="290" width="15" height="40" fill="#FF6666" />
        <rect x="265" y="290" width="15" height="40" fill="#FF6666" />
        <rect x="235" y="340" width="12" height="20" fill="#333333" />
        <rect x="253" y="340" width="12" height="20" fill="#333333" />
        
        {/* Phone in hand */}
        <rect x="230" y="290" width="10" height="20" rx="2" fill="#333333" />
      </svg>
    </div>
  );
};

export default LocationIllustration;
const FeedbackIllustration = () => {
  return (
    <div className="relative h-64 md:h-80">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="200" cy="150" r="120" fill="#CCE5FF" opacity="0.5" />
        
        {/* User profile circle */}
        <circle cx="200" cy="130" r="60" fill="#FF6B6B" />
        <circle cx="200" cy="130" r="50" fill="#FFFFFF" />
        
        {/* Stars */}
        <path d="M120,90 L124,102 L137,102 L127,110 L131,122 L120,115 L109,122 L113,110 L103,102 L116,102 Z" fill="#FFD700" />
        <path d="M280,90 L284,102 L297,102 L287,110 L291,122 L280,115 L269,122 L273,110 L263,102 L276,102 Z" fill="#FFD700" />
        <path d="M330,150 L334,162 L347,162 L337,170 L341,182 L330,175 L319,182 L323,170 L313,162 L326,162 Z" fill="#FFD700" />
        <path d="M70,150 L74,162 L87,162 L77,170 L81,182 L70,175 L59,182 L63,170 L53,162 L66,162 Z" fill="#FFD700" />
        <path d="M200,210 L204,222 L217,222 L207,230 L211,242 L200,235 L189,242 L193,230 L183,222 L196,222 Z" fill="#FFD700" />
        
        {/* People */}
        <circle cx="140" cy="200" r="20" fill="#F2CD5C" />
        <rect x="130" y="220" width="20" height="40" fill="#0066FF" />
        <rect x="125" y="225" width="10" height="20" fill="#0066FF" />
        <rect x="145" y="225" width="10" height="20" fill="#0066FF" />
        
        <circle cx="260" cy="200" r="20" fill="#F2CD5C" />
        <rect x="250" y="220" width="20" height="40" fill="#FF69B4" />
        <rect x="245" y="225" width="10" height="20" fill="#FF69B4" />
        <rect x="265" y="225" width="10" height="20" fill="#FF69B4" />
        
        {/* Speech bubble */}
        <path d="M170,170 Q200,140 230,170 L230,190 Q230,210 210,210 L190,210 Q170,210 170,190 Z" fill="#FFFFFF" stroke="#333333" strokeWidth="2" />
        <circle cx="190" cy="190" r="5" fill="#333333" />
        <circle cx="210" cy="190" r="5" fill="#333333" />
      </svg>
    </div>
  );
};

export default FeedbackIllustration;
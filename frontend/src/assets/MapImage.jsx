const MapImage = () => {
  return (
    <div className="relative h-60 bg-neutral-100">
      <img 
        src="https://images.pexels.com/photos/4101551/pexels-photo-4101551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="Map showing fitness locations" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-1 rounded-full shadow-md animate-pulse-slow">
          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              width="16" 
              height="16" 
              stroke="white" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapImage;
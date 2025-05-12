import { Star } from "lucide-react";

const GymCard = ({ name, imageUrl, address, rating, total_rating, onChange }) => {
  const handleClick = () => {
    onChange();
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between gap-4">
          <div className="w-1/2 h-[150px] overflow-hidden rounded-md">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <p className="text-[#005EFF] font-plus-jakarta text-lg font-semibold leading-tight line-clamp-2">
                {name}
              </p>
              <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                {address}
              </p>
              <div className="text-gray-500 font-semibold text-sm mt-2 flex items-center">
                Rating: {rating} ({total_rating})
                <Star className="ml-1 text-yellow-400 fill-yellow-400" size={16} />
              </div>
            </div>
            <button
              onClick={handleClick}
              className="mt-4 rounded-md py-2 bg-[#005EFF] text-white font-plus-jakarta font-bold text-center"
            >
              Make an offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymCard;

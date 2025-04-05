
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface LocationCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const LocationCard: React.FC<LocationCardProps> = ({ title, image, onClick }) => {
  return (
    <Card 
      className="overflow-hidden cursor-pointer card-hover group"
      onClick={onClick}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600">Click to view details</p>
      </CardContent>
    </Card>
  );
};

export default LocationCard;

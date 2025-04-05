
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <Card className="card-hover overflow-hidden bg-white border border-gray-100 shadow-sm group h-full">
      <CardHeader className="pb-2">
        <div className="feature-icon-container">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="p-0 h-auto text-campus-600 hover:text-campus-800 hover:bg-transparent group-hover:translate-x-1 transition-transform"
          onClick={onClick}
        >
          <span className="mr-2">Learn more</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;

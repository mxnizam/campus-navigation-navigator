
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AuthCheck from '@/components/AuthCheck';
import InfoCard from '@/components/InfoCard';
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Briefcase, FileText, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  const infoCards = [
    {
      title: 'Question Papers',
      description: 'Access previous years question papers to help you prepare for exams.',
      icon: <FileText size={24} />,
      onClick: () => alert('Question Papers feature coming soon!')
    },
    {
      title: 'Student Information',
      description: 'Find information about students, courses, and academic resources.',
      icon: <Users size={24} />,
      onClick: () => alert('Student Information feature coming soon!')
    },
    {
      title: 'Faculty Information',
      description: 'Learn about faculty members, departments, and research areas.',
      icon: <Briefcase size={24} />,
      onClick: () => alert('Faculty Information feature coming soon!')
    },
    {
      title: 'Other Information',
      description: 'Access additional campus resources, events, and announcements.',
      icon: <BookOpen size={24} />,
      onClick: () => alert('Other Information feature coming soon!')
    }
  ];

  return (
    <AuthCheck>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-campus-600 to-campus-800 text-white py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Campus Navigation & Information System</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-100 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  Your one-stop solution for navigating campus resources and accessing vital information
                </p>
                <Button 
                  className="bg-white text-campus-700 hover:bg-gray-100 animate-fade-in" 
                  style={{ animationDelay: '200ms' }}
                  onClick={() => navigate('/navigation')}
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </section>
          
          {/* Info Cards Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Campus Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {infoCards.map((card, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <InfoCard
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        onClick={card.onClick}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="bg-white py-6 border-t border-gray-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 mb-4 md:mb-0">
                © 2025 Campus Navigation System. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-sm text-gray-600 hover:text-campus-600">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-600 hover:text-campus-600">Terms of Service</a>
                <a href="#" className="text-sm text-gray-600 hover:text-campus-600">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </AuthCheck>
  );
};

export default HomePage;

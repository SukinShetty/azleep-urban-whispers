
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, MessageCircle, Music, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      label: "Dashboard",
      icon: Moon,
      path: "/app/dashboard",
    },
    {
      label: "Check-in",
      icon: MessageCircle,
      path: "/app/check-in",
    },
    {
      label: "Sleep Cast",
      icon: Music,
      path: "/app/sleep-cast",
    },
    {
      label: "Journal",
      icon: BookOpen,
      path: "/app/journal",
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-700/20 bg-azleep-dark/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center rounded-md px-2 py-1 text-sm transition-all",
              currentPath === item.path
                ? "text-azleep-accent scale-105"
                : "text-gray-400 hover:text-gray-300"
            )}
            aria-current={currentPath === item.path ? "page" : undefined}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;

'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {theme === 'system' ? (
            <SunMoon />
          ) : theme == 'dark' ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ModeToggle;

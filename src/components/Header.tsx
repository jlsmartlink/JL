'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '../i18n';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ar', name: 'العربية' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xl">
            JL
          </div>
          <span className="font-bold text-xl text-gray-900">JL Smart Link</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            {t('home')}
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
            {t('products')}
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            {t('about')}
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            {t('contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={locale === lang.code ? 'bg-blue-50 text-blue-600' : ''}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.open('https://wa.me/8615305046101', '_blank')}
          >
            🟢 WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}

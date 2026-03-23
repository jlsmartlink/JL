import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../i18n';
import { Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-xl">
                JL
              </div>
              <span className="font-bold text-xl">JL Smart Link</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your reliable industrial parts supplier for global markets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>{t('contact.phone')}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>{t('contact.email')}</span>
              </li>
              <li className="text-gray-400">
                {t('contact.whatsapp')}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Languages</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">English</li>
              <li className="text-gray-400">中文</li>
              <li className="text-gray-400">Deutsch</li>
              <li className="text-gray-400">العربية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

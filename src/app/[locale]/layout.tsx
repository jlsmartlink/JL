import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "JL Smart Link Industrial - Your Reliable Industrial Parts Supplier",
  description: "High-quality industrial parts and solutions for global customers.",
};

const locales = ['en', 'zh', 'de', 'ar'];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} style={{ fontFamily: 'sans-serif' }}>
      <body
        className="antialiased min-h-screen flex flex-col"
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

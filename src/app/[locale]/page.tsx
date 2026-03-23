import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Truck, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "All products undergo strict quality control to ensure reliability and durability."
  },
  {
    icon: Truck,
    title: "Fast Global Shipping",
    description: "We partner with leading logistics providers to deliver your orders quickly worldwide."
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Over a decade of expertise in the industrial parts supply industry."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our customer service team is available around the clock to assist you."
  }
];

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('subtitle')}
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-2xl">
              {t('description')}
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
              {t('cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and quality products to meet all your industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Contact our team today to discuss your industrial parts requirements and get a customized solution.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

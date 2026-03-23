import { useTranslations } from 'next-intl';
import { CheckCircle, Award, Users, Globe, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Satisfied Clients" },
  { number: "2000+", label: "Products Supplied" },
  { number: "30+", label: "Countries Served" }
];

const advantages = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "All our products undergo strict quality control processes to ensure they meet international standards and customer requirements."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand the importance of timely delivery and work closely with logistics partners to ensure your orders arrive on schedule."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team consists of experienced engineers and quality control specialists who are dedicated to providing the best solutions."
  },
  {
    icon: Globe,
    title: "Global Service",
    description: "We serve customers worldwide with multilingual support and international shipping options to meet your needs wherever you are."
  },
  {
    icon: Award,
    title: "Competitive Pricing",
    description: "We offer competitive pricing without compromising on quality, helping you reduce costs and improve your competitiveness."
  },
  {
    icon: CheckCircle,
    title: "Custom Solutions",
    description: "We provide custom manufacturing solutions tailored to your specific requirements, drawings and specifications."
  }
];

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About JL Smart Link Industrial
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your Trusted Industrial Parts Supplier Since 2013
            </p>
            <p className="text-lg text-blue-200 max-w-2xl">
              We are dedicated to providing high-quality industrial parts and comprehensive solutions to customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2013, JL Smart Link Industrial has grown to become a leading supplier of industrial parts and components. With over a decade of experience in the industry, we have built a strong reputation for quality, reliability and excellent customer service.
                </p>
                <p>
                  We specialize in providing a wide range of industrial parts including CNC machined components, hydraulic parts, electrical components, mechanical seals and more. Our products are used in various industries such as manufacturing, construction, mining, agriculture and energy.
                </p>
                <p>
                  Our mission is to be the most reliable partner for our customers by providing high-quality products, competitive prices and exceptional service. We work closely with each customer to understand their specific needs and provide customized solutions that meet their requirements.
                </p>
                <p>
                  With our headquarters in Fujian, China, we serve customers in more than 30 countries across Europe, North America, South America, the Middle East and Southeast Asia. We are committed to continuously improving our products and services to meet the evolving needs of our global customers.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Contact Us to Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-8xl font-bold text-blue-600">
                  JL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best products and services to help your business succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-6">
                  <advantage.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality Commitment
            </h2>
            <p className="text-gray-600 mb-8">
              Quality is at the core of everything we do. We have implemented a comprehensive quality management system to ensure every product meets the highest standards.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Quality Control Process</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Raw Material Inspection</span>
                    <p className="text-gray-600 mt-1">All incoming materials are thoroughly inspected before production to ensure they meet our quality standards.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">In-Process Inspection</span>
                    <p className="text-gray-600 mt-1">Our quality control team conducts regular inspections during the production process to identify and resolve issues early.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Final Testing</span>
                    <p className="text-gray-600 mt-1">Every product undergoes rigorous final testing and inspection before shipment to ensure it meets all specifications.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">Documentation</span>
                    <p className="text-gray-600 mt-1">We provide complete quality documentation and certification for all our products upon request.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

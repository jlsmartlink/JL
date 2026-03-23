import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';

// 产品分类示例
const categories = [
  {
    id: 1,
    name: "CNC Machine Parts",
    description: "High precision CNC machining parts for various industrial applications",
    image: "https://images.unsplash.com/photo-1565043825793-6e69b22370d8?w=400&h=300&fit=crop",
    count: 120
  },
  {
    id: 2,
    name: "Hydraulic Components",
    description: "Reliable hydraulic parts for heavy machinery and industrial equipment",
    image: "https://images.unsplash.com/photo-1581094288338-9372f32d3368?w=400&h=300&fit=crop",
    count: 85
  },
  {
    id: 3,
    name: "Electrical Parts",
    description: "High quality electrical components for industrial automation systems",
    image: "https://images.unsplash.com/photo-1556740755-069a40165b40?w=400&h=300&fit=crop",
    count: 95
  },
  {
    id: 4,
    name: "Mechanical Seals",
    description: "Durable mechanical seals for pumps, valves and rotating equipment",
    image: "https://images.unsplash.com/photo-1621905251182-46020d97162a?w=400&h=300&fit=crop",
    count: 60
  }
];

// 热门产品示例
const featuredProducts = [
  {
    id: 1,
    name: "High Precision CNC Milling Part",
    category: "CNC Machine Parts",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1581092918056-00113aaf1cc3?w=300&h=300&fit=crop",
    description: "Custom made CNC milling part with high precision tolerance of ±0.01mm"
  },
  {
    id: 2,
    name: "Hydraulic Pump Spare Parts",
    category: "Hydraulic Components",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1581093588482-3a2c333c3331?w=300&h=300&fit=crop",
    description: "High quality replacement parts for various hydraulic pump models"
  },
  {
    id: 3,
    name: "Industrial Control Panel",
    category: "Electrical Parts",
    price: "$249.99",
    image: "https://images.unsplash.com/photo-1556740755-069a40165b40?w=300&h=300&fit=crop",
    description: "Programmable industrial control panel with touch screen interface"
  },
  {
    id: 4,
    name: "Mechanical Seal Assembly",
    category: "Mechanical Seals",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1621905251182-46020d97162a?w=300&h=300&fit=crop",
    description: "Premium mechanical seal assembly for industrial pump applications"
  },
  {
    id: 5,
    name: "Stainless Steel Valve Body",
    category: "CNC Machine Parts",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop",
    description: "Precision cast stainless steel valve body for industrial applications"
  },
  {
    id: 6,
    name: "Hydraulic Cylinder Seal Kit",
    category: "Hydraulic Components",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1581092921461-77e947ec82ea?w=300&h=300&fit=crop",
    description: "Complete seal repair kit for standard hydraulic cylinders"
  }
];

export default function ProductsPage() {
  const t = useTranslations();

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We offer a wide range of high quality industrial parts and components to meet your various needs.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Categories Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/products/category/${category.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {category.count} Products
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Custom Parts?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We also provide custom manufacturing services according to your drawings and specifications. Contact us today for a quote!
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                Contact Us for Customization
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

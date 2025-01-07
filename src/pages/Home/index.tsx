import Hero from './components/Hero';
import { Monitor, Cpu, HardDrive } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 card">
              <div className="flex justify-center mb-4">
                <Monitor className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p>Get personalized recommendations from our PC building experts</p>
            </div>
            <div className="text-center p-6 card">
              <div className="flex justify-center mb-4">
                <Cpu className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Components</h3>
              <p>Premium parts from trusted manufacturers with warranty</p>
            </div>
            <div className="text-center p-6 card">
              <div className="flex justify-center mb-4">
                <HardDrive className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Builds</h3>
              <p>Tailor your PC to your specific needs and budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center card mx-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your PC?</h2>
          <p className="text-xl mb-8">
            Let's create your perfect computer together
          </p>
          <Link
            to="/build-pc"
            className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
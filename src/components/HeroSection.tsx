
import { Button } from "@/components/ui/button";
import DemoRequestForm from "@/components/DemoRequestForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 animate-fade-in">
          Turn Any Video into a{" "}
          <span className="text-gradient">Storefront</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in delay-300">
          SceneShop transforms your streaming experience into a seamless buying journey with patent-pending interactive video commerce technology
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500">
          <DemoRequestForm>
            <Button className="btn-primary text-lg">
              Request Demo
            </Button>
          </DemoRequestForm>
          <Button variant="outline" className="btn-secondary text-lg">
            Download Executive Brief
          </Button>
        </div>

        {/* Video mockup with Netflix series */}
        <div className="mt-16 relative animate-fade-in delay-700">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-4 md:p-8 border border-slate-700">
            <div className="aspect-video bg-midnight-800 rounded-lg relative overflow-hidden">
              {/* Netflix series video background */}
              <video 
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4" />
                {/* Fallback gradient if video doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-cyan-400/30"></div>
              </video>

              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Demo label */}
              <div className="absolute top-4 left-4 bg-black/70 rounded-lg px-3 py-2">
                <p className="text-white text-sm font-semibold">Interactive Video Commerce Demo</p>
              </div>
              
              {/* Product overlay mockup - Stranger Things merchandise */}
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-white/10 backdrop-blur-md rounded-lg p-2 md:p-3 border border-white/20">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-red-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-bold">ST</span>
                  </div>
                  <div>
                    <p className="text-white text-xs md:text-sm font-semibold">Stranger Things T-Shirt</p>
                    <p className="text-cyan-400 text-xs md:text-sm">$24.99</p>
                  </div>
                  <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;

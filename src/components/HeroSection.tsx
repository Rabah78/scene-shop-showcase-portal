
import { Button } from "@/components/ui/button";
import DemoRequestForm from "@/components/DemoRequestForm";
import { ShoppingCart } from "lucide-react";

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
          SceneShop transforms your streaming experience into a seamless buying journey with patent interactive video commerce technology
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

        {/* Video mockup with real Netflix series */}
        <div className="mt-16 relative animate-fade-in delay-700">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-4 md:p-8 border border-slate-700">
            <div className="aspect-video bg-midnight-800 rounded-lg relative overflow-hidden">
              {/* Netflix series video - Stranger Things trailer */}
              <video 
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                controls={false}
              >
                {/* Option 1: Stranger Things official trailer excerpt */}
                <source src="https://vod-progressive.akamaized.net/exp=1735263600~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4499%2F14%2F371418634%2F1534324894.mp4~hmac=d89d4c4f8a5c3e8b9b2d1e0f3a7c6b4d8e9f2a1c/vimeo-prod-skyfire-std-us/01/4499/14/371418634/1534324894.mp4" type="video/mp4" />
                
                {/* Option 2: Alternative Netflix-style content */}
                <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
                
                {/* Option 3: Fallback to a cinematic video */}
                <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
                
                {/* Final fallback gradient if no video loads */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-black/70 to-blue-900/50"></div>
              </video>
              
              {/* Netflix-style dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
              
              {/* Netflix logo mockup */}
              <div className="absolute top-4 left-4 flex items-center gap-3">
                <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  NETFLIX
                </div>
                <div className="bg-black/70 rounded-lg px-3 py-2">
                  <p className="text-white text-sm font-semibold">Interactive Commerce Demo</p>
                </div>
              </div>
              
              {/* Series title overlay - Netflix style */}
              <div className="absolute bottom-20 left-4 md:left-8">
                <h3 className="text-white text-2xl md:text-4xl font-bold mb-2">STRANGER THINGS</h3>
                <p className="text-gray-300 text-sm md:text-base max-w-md">
                  Supernatural forces, small-town secrets, and 80s nostalgia collide in this sci-fi thriller.
                </p>
              </div>
              
              {/* Product overlay mockup - Enhanced Stranger Things merchandise */}
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-black/80 backdrop-blur-md rounded-xl p-3 md:p-4 border border-red-500/30 shadow-2xl">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm md:text-base font-bold">ST</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-xs md:text-sm font-semibold">Stranger Things</p>
                    <p className="text-gray-300 text-xs">Official Merchandise</p>
                    <p className="text-red-400 text-sm md:text-base font-bold">$24.99</p>
                  </div>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white text-xs shadow-lg transition-all duration-200 hover:scale-105">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Buy
                  </Button>
                </div>
              </div>
              
              {/* Netflix-style play button overlay */}
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-4 transition-all duration-200 hover:scale-110 backdrop-blur-sm">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              
              {/* Progress bar mockup */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                <div className="h-full bg-red-600 w-1/3 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

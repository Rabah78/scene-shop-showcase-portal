
import { Button } from "@/components/ui/button";

const UseCaseShowcase = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            See SceneShop in{" "}
            <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how leading broadcasters and sports platforms are revolutionizing viewer engagement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Live Sports Commerce Revolution
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                During Lakers matches, viewers can instantly purchase player jerseys, equipment, and merchandise without missing a moment of action. Real-time product recognition identifies items as they appear on screen.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-gray-300">73% increase in merchandise sales</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                <span className="text-gray-300">2.3x higher viewer engagement</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-gray-300">45-second average purchase time</span>
              </div>
            </div>

            <Button className="btn-primary">
              Explore Sports Use Cases
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700">
              <div className="aspect-video bg-midnight-800 rounded-lg relative overflow-hidden">
                {/* Animated Lakers game background */}
                <img 
                  src="https://raw.githubusercontent.com/Rabah78/scene-shop-showcase-portal/main/SceneShop_NBA.webp"
                  alt="Lakers Live Game"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Dark overlay for better overlay visibility */}
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Live indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-white font-semibold text-sm bg-black/50 px-2 py-1 rounded">LIVE</span>
                </div>

                {/* Score overlay - Updated for Lakers game */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <span className="text-white font-bold">LAL 100-67 MEM</span>
                </div>

                {/* ESPN-style bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm h-12 flex items-center px-4">
                  <div className="flex items-center gap-4 text-white text-sm">
                    <span className="font-bold">ESPN</span>
                    <span>4th 11:26</span>
                    <span>WEST 1st RD</span>
                    <span>LAL LEAD 3-2</span>
                  </div>
                </div>

                {/* Product overlays */}
                <div className="absolute bottom-16 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 animate-fade-in shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-yellow-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">LAL</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">LeBron Jersey</p>
                      <p className="text-yellow-400 text-sm">$119.99</p>
                    </div>
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-semibold">
                      Buy
                    </Button>
                  </div>
                </div>

                <div className="absolute bottom-16 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 animate-fade-in delay-300 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                    <div>
                      <p className="text-white text-sm font-semibold">Nike Shoes</p>
                      <p className="text-cyan-400 text-sm">$159.99</p>
                    </div>
                    <Button size="sm" className="bg-purple-500 hover:bg-purple-600 text-xs">
                      Buy
                    </Button>
                  </div>
                </div>

                {/* Optional: Hover overlay for interactivity */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 flex items-center justify-center cursor-pointer">
                  <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-6 border-l-white border-y-4 border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseShowcase;

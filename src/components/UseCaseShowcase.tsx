
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
                During PSG matches, viewers can instantly purchase player jerseys, equipment, and merchandise without missing a moment of action. Real-time product recognition identifies items as they appear on screen.
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
                {/* Mock sports video */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40"></div>
                
                {/* Live indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-white font-semibold text-sm">LIVE</span>
                </div>

                {/* Score overlay */}
                <div className="absolute top-4 right-4 bg-black/70 rounded-lg px-4 py-2">
                  <span className="text-white font-bold">PSG 2-1 MUN</span>
                </div>

                {/* Product overlays */}
                <div className="absolute bottom-20 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">PSG</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Mbappé Jersey</p>
                      <p className="text-cyan-400 text-sm">€89.99</p>
                    </div>
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-xs">
                      Buy
                    </Button>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 animate-fade-in delay-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                    <div>
                      <p className="text-white text-sm font-semibold">Nike Boots</p>
                      <p className="text-cyan-400 text-sm">€159.99</p>
                    </div>
                    <Button size="sm" className="bg-violet-500 hover:bg-violet-600 text-xs">
                      Buy
                    </Button>
                  </div>
                </div>

                {/* Center play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
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

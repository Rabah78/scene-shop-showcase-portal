
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
                {/* Lakers game background with automatic rotation */}
                <img 
                  src="https://raw.githubusercontent.com/Rabah78/scene-shop-showcase-portal/main/SceneShop_NBA.webp"
                  alt="Lakers Live Game"
                  className="absolute inset-0 w-full h-full object-cover animate-spin"
                  style={{ animationDuration: '20s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseShowcase;


import { Circle, Monitor, Search } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "AI-Powered Product Detection",
    description: "Advanced computer vision automatically identifies and tags products in real-time video streams with 99.7% accuracy",
  },
  {
    icon: Circle,
    title: "Seamless Overlay Interface",
    description: "Non-intrusive, contextual shopping interface that appears precisely when viewers show interest, preserving content flow",
  },
  {
    icon: Monitor,
    title: "Multi-Platform Compatibility",
    description: "Works seamlessly across CTV, web, and mobile platforms with unified analytics and inventory management",
  },
];

const ProductHighlights = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Next-Generation{" "}
            <span className="text-gradient">Video Commerce</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powered by cutting-edge AI and designed for scale, SceneShop delivers unprecedented shopping experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-violet-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;

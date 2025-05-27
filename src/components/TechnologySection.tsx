
import React from 'react';

const TechnologySection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-violet-600/20 border border-violet-500/30 mb-8">
            <span className="text-violet-400 font-semibold">Patent Pending: PCT/EP2024/060459</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-8">
            Breakthrough{" "}
            <span className="text-gradient">Innovation</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
            Built with privacy, performance, and scale in mind. Our patent-pending technology enables real-time product tagging without compromising viewer experience or content quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Privacy-First Architecture</h3>
              <p className="text-gray-400">
                GDPR-compliant data processing with on-device AI inference and encrypted viewer interactions
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-xl font-semibold text-violet-400 mb-3">Enterprise-Grade Performance</h3>
              <p className="text-gray-400">
                Sub-100ms latency with 99.99% uptime, handling millions of concurrent viewers seamlessly
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Scalable Infrastructure</h3>
              <p className="text-gray-400">
                Cloud-native microservices architecture with global CDN distribution and auto-scaling
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-mono text-green-400">AI Engine: Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                  <span className="font-mono text-cyan-400">Video Processing: 4K@60fps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                  <span className="font-mono text-violet-400">Product Detection: 99.7%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="font-mono text-yellow-400">Latency: &lt;50ms</span>
                </div>
              </div>
              
              <div className="mt-8 h-32 bg-midnight-800 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-violet-600/20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 font-mono">Real-time Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

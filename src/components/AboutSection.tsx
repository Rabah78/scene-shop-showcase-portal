
const AboutSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                About{" "}
                <span className="text-gradient">Padam Technologies</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Founded with a vision to revolutionize digital commerce, Padam Technologies QFZ LLC brings together decades of experience in AI, video technology, and enterprise software.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-violet-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Legacy of Innovation</h3>
                  <p className="text-gray-400">
                    35+ years of proven expertise in building scalable technology solutions for enterprise clients
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Strategic Backing</h3>
                  <p className="text-gray-400">
                    Affiliated with GIPEFI Invest, providing strategic guidance and market access across emerging markets
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-violet-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Global Presence</h3>
                  <p className="text-gray-400">
                    Headquartered in Qatar Free Zone with operations across MENA, Europe, and North America
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Company Highlights</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-lg bg-violet-600/10 border border-violet-500/20">
                    <div className="text-2xl font-bold text-violet-400 mb-1">35+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-cyan-600/10 border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">50K+</div>
                    <div className="text-gray-400 text-sm">Video Hours Processed</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-violet-600/10 border border-violet-500/20">
                    <div className="text-2xl font-bold text-violet-400 mb-1">99.99%</div>
                    <div className="text-gray-400 text-sm">Platform Uptime</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-cyan-600/10 border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">25+</div>
                    <div className="text-gray-400 text-sm">Enterprise Clients</div>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                  <h4 className="text-white font-semibold mb-3">GIPEFI Invest Partnership</h4>
                  <p className="text-gray-400 text-sm">
                    Strategic investment and guidance from one of the region's leading technology investment firms, providing access to markets and expertise across emerging economies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

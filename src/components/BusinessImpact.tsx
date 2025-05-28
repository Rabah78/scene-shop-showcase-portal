
const BusinessImpact = () => {
  const stats = [
    { label: "Total Addressable Market", value: "$25B", description: "Global video streaming commerce" },
    { label: "Serviceable Market", value: "$10B", description: "Interactive video platforms" },
    { label: "Revenue Growth", value: "340%", description: "Year-over-year increase" },
    { label: "Client Satisfaction", value: "98%", description: "Platform reliability score" },
  ];

  const clients = [
    { name: "Ooredoo", role: "Telecom Partner" },
    { name: "NoorPlay", role: "Streaming Platform" },
    { name: "BeIN Sports", role: "Sports Broadcaster" },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Proven{" "}
            <span className="text-gradient">Market Impact</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            SceneShop is already transforming how leading organizations monetize their video content
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-gradient mb-3">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">
              Trusted by Industry Leaders
            </h3>
            
            <div className="space-y-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{client.name}</h4>
                      <p className="text-gray-400 text-sm">{client.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-violet-500/30">
              <blockquote className="text-lg text-white mb-6 italic">
                "SceneShop has revolutionized how we monetize live sports content. The seamless integration and instant purchasing capability has increased our revenue per viewer by 340%."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full"></div>
                <div>
                  <p className="text-white font-semibold">Daniel Markham</p>
                  <p className="text-gray-400 text-sm">Special Advisor to Chairman & CEO, BeIN Sports</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
              <h4 className="text-cyan-400 font-semibold mb-3">Strategic Partnership</h4>
              <p className="text-gray-400">
                Backed by GIPEFI Invest and supported by leading technology partners across the MENA region
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;

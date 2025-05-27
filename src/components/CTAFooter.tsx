
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTAFooter = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-800 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="text-gradient">Video Experience?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join leading broadcasters and streaming platforms who are already revolutionizing viewer engagement with SceneShop
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Get Started Today</h3>
            <p className="text-gray-400">
              Request a personalized demo or download our executive briefing to learn more
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button className="btn-primary text-lg px-12 py-4">
              Schedule Demo
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-12 py-4">
              Download Brief
            </Button>
          </div>

          <div className="max-w-md mx-auto">
            <p className="text-center text-gray-400 mb-4">Stay updated with our latest innovations</p>
            <div className="flex gap-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-slate-800 border-slate-600 text-white"
              />
              <Button className="bg-violet-600 hover:bg-violet-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact and Links */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p className="text-gray-400 text-sm">
              info@padamtech.com<br />
              +974 4000 1234
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-violet-400 text-sm transition-colors">
                Executive Brief
              </a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 text-sm transition-colors">
                Technical Documentation
              </a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 text-sm transition-colors">
                Case Studies
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Padam Technologies QFZ LLC. All rights reserved. | Patent Pending: PCT/EP2024/060459
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;

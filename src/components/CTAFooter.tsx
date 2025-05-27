
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DemoRequestForm from "@/components/DemoRequestForm";

const CTAFooter = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-800 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="text-gradient">Video Experience?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join leading broadcasters and streaming platforms who are already revolutionizing viewer engagement with SceneShop's patent-pending technology
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Get Started Today</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Request a personalized demo to see how SceneShop can transform your video content into a powerful commerce platform, or download our executive briefing for detailed insights
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <DemoRequestForm>
              <Button className="btn-primary text-lg px-12 py-4">
                Schedule Demo
              </Button>
            </DemoRequestForm>
            <Button variant="outline" className="btn-secondary text-lg px-12 py-4">
              Download Executive Brief
            </Button>
          </div>

          <div className="max-w-md mx-auto">
            <p className="text-center text-gray-400 mb-4 font-medium">Stay Updated with Our Latest Innovations</p>
            <div className="flex gap-3">
              <Input 
                placeholder="Enter your business email" 
                className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-500"
              />
              <Button className="bg-violet-600 hover:bg-violet-700 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Professional Contact and Links Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <strong className="text-gray-300">Email:</strong><br />
                info@padamtech.com
              </p>
              <p className="text-gray-400">
                <strong className="text-gray-300">Phone:</strong><br />
                +974 4000 1234
              </p>
              <p className="text-gray-400">
                <strong className="text-gray-300">Address:</strong><br />
                Doha, Qatar
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Resources</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-violet-400 text-sm transition-colors">
                Executive Briefing
              </a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 text-sm transition-colors">
                Technical Documentation
              </a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 text-sm transition-colors">
                Case Studies
              </a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 text-sm transition-colors">
                API Documentation
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Press Kit
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Partner Program
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Twitter
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                YouTube
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Medium
              </a>
            </div>
          </div>
        </div>

        {/* Legal and Copyright */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2025 Padam Technologies QFZ LLC. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Patent Pending: PCT/EP2024/060459
              </p>
            </div>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;

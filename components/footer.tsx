export function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <img 
                src="/images/logo-New-Nanda-white.png" 
                alt="New Nanda Logo" 
                className="h-16 w-auto object-contain mb-4 self-start"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
            Custom packaging, menu book, stationery, presentation cases, and more. Bring your ideas into reality.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-white mb-4 text-sm uppercase tracking-[1.5px]">Navigation</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-white/80 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#work" className="block text-white/80 hover:text-white transition-colors text-sm">
                What We Make    
              </a>
              
              <a href="#craft-materials" className="block text-white/80 hover:text-white transition-colors text-sm">
                Craft & Materials
              </a>
              <a href="#start-project" className="block text-white/80 hover:text-white transition-colors text-sm">
                Start a Project
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-white mb-4 text-sm uppercase tracking-[1.5px]">Contact</h4>
            <div className="space-y-2">
              <p className="text-white/80 text-sm">WhatsApp: +62 812 XXXX XXXX</p>
              <a
                href="https://wa.me/62812XXXXXXXX?text=Hello%20New%20Nanda%2C%20I%27d%20like%20to%20start%20a%20custom%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-primary/80 transition-colors text-sm underline decoration-1 underline-offset-4"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© 2025 New Nanda</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

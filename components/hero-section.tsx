import { Button } from "@/components/ui/button"

export function HeroSection() {
  const whatsappLink =
    "https://wa.me/62812XXXXXXXX?text=Hello%20New%20Nanda%2C%20I%27d%20like%20to%20start%20a%20custom%20order."

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white text-white overflow-hidden"
    >
      {/* Left Background Image */}
      <div
        className="absolute left-0 top-0 w-1/3 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-section-left.png?height=1080&width=640')`,
        }}
      />

      {/* Right Background Image */}
      <div
        className="absolute right-0 top-0 w-1/3 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-section-right.png?height=1080&width=640')`,
        }}
      />

      {/* White Center Area */}
      <div className="absolute left-1/3 right-1/3 top-0 h-full bg-white" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="mb-12 flex justify-center">
          <img 
            src="/images/logo-New-Nanda-gold.png" 
            alt="New Nanda Logo" 
            className="h-24 w-auto"
          />
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-[0.5px] mb-8 text-black">
          Crafted to order,
          <br />
          built to last
        </h1>

        <div className="max-w-xl mx-auto mb-8">
          <p className="text-lg md:text-xl leading-relaxed text-primary mb-4">
            We design and manufacture custom pieces—packaging, menu covers, stationery, bill folders, presentation
            cases, and more.
          </p>
        </div>

        <p className="text-sm mb-12 italic text-black">"Bring your ideas into reality."</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="hover:text-white/80 underline decoration-1 underline-offset-4 hover:underline-offset-8 transition-all duration-300 text-gray-500"
            asChild
          >
            <a href="#work">See our work</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

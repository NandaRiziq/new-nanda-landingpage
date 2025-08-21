"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappLink =
    "https://wa.me/62812XXXXXXXX?text=Hello%20New%20Nanda%2C%20I%27d%20like%20to%20start%20a%20custom%20order."

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm opacity-100 translate-y-0" : "bg-transparent opacity-0 -translate-y-full"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Brand Lockup */}
          <div className="flex items-center">
            <img 
              src="/images/logo-New-Nanda-gold.png" 
              alt="New Nanda Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#work"
              className="text-sm uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
            >
              What We Make   
            </a>
            
            <a
              href="#craft-materials"
              className="text-sm uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
            >
              Craft & Materials
            </a>
            <a
              href="#start-project"
              className="text-sm uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
            >
              Start a Project
            </a>
          </nav>

          {/* Desktop CTA */}
          <Button
            variant="outline"
            className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#home"
              className="text-lg uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#work"
              className="text-lg uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#what-we-make"
              className="text-lg uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              What We Make
            </a>
            <a
              href="#craft-materials"
              className="text-lg uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Craft & Materials
            </a>
            <a
              href="#start-project"
              className="text-lg uppercase tracking-[1.5px] text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project
            </a>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-8 bg-transparent"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

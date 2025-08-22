"use client"

import { TextEffect } from "@/components/motion-primitives/text-effect"
import { useInView } from "motion/react"
import { useRef } from "react"

export function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3, once: true })
  return (
    <section id="clients" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <div ref={ref}>
            <TextEffect
              preset="fade-in-blur"
              speedReveal={1.1}
              speedSegment={0.3}
              trigger={isInView}
              className="font-serif text-2xl font-normal mb-18 text-foreground md:text-5xl"
            >
              Our Clients
            </TextEffect>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Client logos - you can replace these with actual client logos */}
            <div className="w-25 h-25 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group">
              <img 
                src="images\logo\logo-duta-indah.png" 
                alt="Duta Indah Logo" 
                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="w-20 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group">
              <img 
                src="images\logo\logo-semesta.png" 
                alt="Semesta Logo" 
                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="w-20 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group">
              <img 
                src="images\logo\logo-udinus.png" 
                alt="Udinus Logo" 
                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="w-25 h-25 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group">
              <img 
                src="images\logo\logo-rs-bunda.png" 
                alt="RS Bunda Logo" 
                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="w-20 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group">
              <img 
                src="images\logo\logo-harrison-gil.png" 
                alt="Harrison & Gil Logo" 
                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="w-25 h-25 flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 group">
              <img 
                src="images\logo\logo-gembira-photo.png" 
                alt="Gembira Photo Logo" 
                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-primary text-sm">And many more...</h3>
        </div>
      </div>
    </section>
  )
}

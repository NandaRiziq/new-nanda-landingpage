"use client"

import { Card } from "@/components/ui/card"
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { useInView } from "motion/react"
import { useRef } from "react"

export function SelectedWorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3, once: true })

  const projects = [
    {
      title: "Restaurant Menu Book",
      description: "Textured leather, gold-foil logo, hard cover structure",
      materials: "Rigid board, satin ribbon, gold foil",
      image: "/images/cardimage/cardimage-1.png",
    },
    {
      title: "Exclusive Invitation",
      description: "Printed art paper, satin ribbon tie, colored-foil",
      materials: "Linen, gold foil, screw-post",
      image: "/images/cardimage/cardimage-2.png",
    },
    {
      title: "Product Sample Box",
      description: "Grey board, Linmaster cover, foiled logo, ivory sleeve",
      materials: "Textured paper, deboss, metallic edge",
      image: "/images/cardimage/cardimage-3.png",
    },
    {
      title: "Custom Briefcase",
      description: "Floral paper, suede accent, stitched carry handle",
      materials: "Velvet insert, magnet lock, foil",
      image: "/images/cardimage/cardimage-4.png",
    },
    {
      title: "Photo Album",
      description: "Assorted photo albums with various covers and designs",
      materials: "Genuine leather, magnetic latch, foam cushioning",
      image: "/images/cardimage/cardimage-6.png",
    },
    {
      title: "Custom Packaging",
      description: "Rigid gift box, magnetic lid, custom tray",
      materials: "Recycled paper, elastic band, custom printing",
      image: "/images/cardimage/cardimage-7.png",
    },
  ]

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div ref={ref} className="h-[60px]">
            <TextEffect 
              preset="fade-in-blur" 
              speedReveal={1.1} 
              speedSegment={0.3}
              trigger={isInView}
              className="font-serif text-4xl md:text-5xl font-normal mb-6 text-foreground"
            >
              What We Make
            </TextEffect>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A few recent pieces—each designed around a specific brand, material, and moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            // Check if this card is in the last row (for 3-column grid)
            const isLastRow = index >= projects.length - (projects.length % 3 || 3);
            
            return (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-none hover:shadow-lg transition-all duration-300 p-0 bg-transparent rounded-lg"
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 pb-6">
                  <h3 className="font-serif text-xl font-medium mb-2 text-primary-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground/80">{project.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}

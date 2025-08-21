import { Button } from "@/components/ui/button"

export function CraftMaterialsSection() {
  return (
    <section id="craft-materials" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal mb-8 text-foreground">Craft & Materials</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Material choice defines the feeling; finishing locks in durability. We source premium stocks and hardware,
              then finish by hand.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-foreground mb-3">Covers</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  linen, buckram, leatherette, acrylic, wood veneer
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Papers</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  matte art, textured, waterproof synthetics
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Bindings</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  screw-post, ring, lay-flat, hidden hinge
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Finishes</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  foil stamp, deboss/emboss, UV print, edge gilding, die-cut, metal corners
                </p>
              </div>
            </div>

            
          </div>

          {/* Image */}
          <div className="order-first lg:order-last">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/images/cardimage/cardimage-5.jpg"
                alt="Material board showing linen, leatherette, and wood veneer swatches with foil and hardware samples"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

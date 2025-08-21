import { Card } from "@/components/ui/card"

export function SelectedWorkSection() {
  const projects = [
    {
      title: "Minimal Rigid Gift Box",
      description: "Matte board, ribbon pull, hot-stamped logo.",
      materials: "Rigid board, satin ribbon, gold foil",
      image: "/images/cardimage/cardimage-1.png",
    },
    {
      title: "Screw-Post Menu Cover",
      description: "Linen cloth, replaceable inserts for daily service.",
      materials: "Linen, gold foil, screw-post",
      image: "/images/cardimage/cardimage-2.png",
    },
    {
      title: "Presentation Folder Set",
      description: "Textured stock, debossed mark, edge gilding.",
      materials: "Textured paper, deboss, metallic edge",
      image: "/images/cardimage/cardimage-3.png",
    },
    {
      title: "USB Case & Card",
      description: "Velvet tray, magnetic closure, foil monogram.",
      materials: "Velvet insert, magnet lock, foil",
      image: "/images/cardimage/cardimage-4.png",
    },
  ]

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-foreground">What We Make</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A few recent pieces—each designed around a specific brand, material, and moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-none hover:shadow-lg transition-all duration-300 p-0 bg-transparent rounded-none"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium mb-2 text-primary-foreground">{project.title}</h3>
                <p className="text-primary-foreground/80 mb-3 leading-relaxed">{project.description}</p>
                <p className="text-sm text-primary-foreground/60 mb-4 italic">{project.materials}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

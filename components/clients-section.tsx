export function ClientsSection() {
  return (
    <section id="clients" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-2xl font-normal mb-8 text-foreground md:text-5xl">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {/* Placeholder for client logos - you can replace these with actual client logos */}
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Duta Indah  </span>
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Semesta</span>
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Udinus</span>
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">RS Bunda </span>
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Harrison &amp; Gil  </span>
            </div>
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Gembira Photo </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-primary text-xl">And many more...</h3>
        </div>
      </div>
    </section>
  )
}

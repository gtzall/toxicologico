export default function Substances() {
  const substances = [
    "Maconha e derivados", "Cocaína e derivados", "Opiáceos", "Anfetaminas", 
    "Metanfetaminas", "Ecstasy (MDMA)", "Mazindol"
  ]

  return (
    <section className="py-32 bg-foreground text-background overflow-hidden animate-fade-in-up">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight tracking-tight">
              Substâncias <br />
              <span className="text-muted-foreground italic">Detectadas</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-md mb-12 font-sans">
              Tecnologia de ponta para detecção precisa e laudos seguros.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {substances.map((item, i) => (
                <div key={i} className="flex items-baseline gap-4 border-b border-white/20 pb-4 group hover:border-white/60 transition-colors">
                  <span className="text-sm text-white/50 font-mono">0{i + 1}</span>
                  <span className="text-xl font-serif tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] w-full hidden md:block overflow-hidden group image-dark">
             <img 
              src="https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=1888&auto=format&fit=crop" 
              alt="Laboratory detail" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 border border-white/10 m-8 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

type Slide = { src: string; alt: string }

interface CarouselProps { slides: Slide[]; interval?: number }

export default function Carousel({ slides, interval = 5000 }: CarouselProps){
  const [current, setCurrent] = React.useState(0)
  const [playing, setPlaying] = React.useState(true)
  const total = slides.length
  const regionRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(()=>{
    if(!playing) return
    const id = setInterval(()=> setCurrent(c => (c+1) % total), interval)
    return ()=> clearInterval(id)
  },[playing, interval, total])

  React.useEffect(()=>{
    const onKey = (e: KeyboardEvent) => {
      if(e.key === 'ArrowRight') setCurrent(c=> (c+1)%total)
      if(e.key === 'ArrowLeft') setCurrent(c=> (c-1+total)%total)
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[total])

  return (
    <section
      ref={el=> regionRef.current = el}
      className="relative w-full overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Galeria de imagens"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
    >
      <div className="w-full h-64 md:h-96 relative">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i===current? 'opacity-100':'opacity-0 pointer-events-none'}`}
            aria-hidden={i===current? 'false':'true'}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full focus:outline-none focus:ring-2"
        onClick={() => setCurrent((current-1+total)%total)}
        aria-label="Slide anterior"
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full focus:outline-none focus:ring-2"
        onClick={() => setCurrent((current+1)%total)}
        aria-label="Próximo slide"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i===current? 'bg-white':'bg-white/60'}`}
            onClick={()=> setCurrent(i)}
            aria-label={`Ir para slide ${i+1} de ${total}`}
            aria-current={i===current? 'true' : undefined}
          />
        ))}
      </div>

      {/* Live region for screen readers */}
      <div className="sr-only" aria-live="polite">Slide {current+1} de {total}</div>
    </section>
  )
}

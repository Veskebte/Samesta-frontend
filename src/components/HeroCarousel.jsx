import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    title: 'Studio Room',
    subtitle: 'Cocok untuk beristirahat dan bekerja',
    link: '/apartments'
  },
  {
    title: '2 Bedroom',
    subtitle: 'Cocok untuk keluarga kecil anda',
    link: '/apartments'
  }
]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  return (
    <section
      className="relative h-[600px] overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000
            ${index === active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gray-600" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="mb-4 text-4xl md:text-6xl font-extrabold">
              {slide.title}
            </h1>

            <p className="mb-6 text-lg md:text-2xl">
              {slide.subtitle}
            </p>

            <Link
              to={slide.link}
              className="inline-block text-xl font-semibold transition transform
                hover:scale-110 hover:text-white"
              style={{
                textShadow: '2px 2px 6px rgba(0,0,0,0.5)'
              }}
            >
              Booking sekarang
            </Link>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-3 w-3 rounded-full transition
              ${index === active ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </section>
  )
}

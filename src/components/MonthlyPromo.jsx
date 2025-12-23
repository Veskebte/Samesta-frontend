import { useState, useEffect, useRef } from 'react'

export default function MonthlyPromo() {
  const [active, setActive] = useState(0)
  const [selectedPromo, setSelectedPromo] = useState(null)
  const intervalRef = useRef(null)

  const promos = [
    [
      {
        id: 1,
        title: 'Studio Special',
        discount: '25% OFF',
        description: 'First month rent for new tenants',
        image: 'https://images.unsplash.com/photo-1502672260066-6bc35f0b1e1e?w=400&h=300&fit=crop',
        validUntil: 'Dec 31, 2025'
      },
      {
        id: 2,
        title: '2 Bedroom Deal',
        discount: '30% OFF',
        description: 'Move in this month and save big',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
        validUntil: 'Dec 31, 2025'
      },
      {
        id: 3,
        title: 'Early Bird Special',
        discount: '15% OFF',
        description: 'Book 3 months in advance',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
        validUntil: 'Dec 31, 2025'
      }
    ],
    [
      {
        id: 4,
        title: 'Holiday Promo',
        discount: '20% OFF',
        description: 'Special holiday rates available',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
        validUntil: 'Jan 15, 2026'
      },
      {
        id: 5,
        title: 'Long Stay Discount',
        discount: '35% OFF',
        description: 'Book 6+ months and get extra savings',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
        validUntil: 'Jan 31, 2026'
      },
      {
        id: 6,
        title: 'Student Special',
        discount: '10% OFF',
        description: 'Valid student ID required',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
        validUntil: 'Dec 31, 2025'
      }
    ]
  ]

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % promos.length)
    }, 5000)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-extrabold text-gray-900">
            Promo Bulan Ini
          </h2>
          <p className="text-lg text-gray-500">
            Jangan lewatkan promo menarik bulan ini!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {promos.map((group, index) => (
              <div key={index} className="min-w-full">
                <div className="grid gap-6 md:grid-cols-3">
                  {group.map((promo) => (
                    <div
                      key={promo.id}
                      className="group rounded-2xl bg-white shadow-sm transition
                        hover:-translate-y-2 hover:shadow-xl"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden rounded-t-2xl">
                        <img
                          src={promo.image}
                          alt={promo.title}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute right-4 top-4 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
                          {promo.discount}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex h-full flex-col p-6">
                        <h3 className="mb-2 text-xl font-bold text-gray-900">
                          {promo.title}
                        </h3>

                        <p className="mb-4 flex-grow text-gray-500">
                          {promo.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">
                            Valid until {promo.validUntil}
                          </span>

                          <button
                            onClick={() => setSelectedPromo(promo)}
                            className="rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white
                              transition hover:bg-gray-800"
                          >
                            Info lebih lanjut
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-3">
            {promos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-3 w-3 rounded-full transition
                  ${active === i ? 'bg-gray-900' : 'bg-gray-400 hover:bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">{selectedPromo.title}</h3>
              <button
                onClick={() => setSelectedPromo(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="mb-6 text-center">
              <span className="inline-block rounded-full bg-red-600 px-6 py-3 text-xl font-bold text-white">
                {selectedPromo.discount}
              </span>
            </div>

            <p className="mb-4 text-gray-600">
              {selectedPromo.description}
            </p>

            <div className="mb-4 rounded-xl bg-gray-100 p-4 text-sm text-gray-600">
              Berlaku sampai: <strong>{selectedPromo.validUntil}</strong>
            </div>

            <div className="mb-6 rounded-xl bg-blue-50 p-4 text-sm text-blue-700">
              Promo ini terbatas dan dapat berubah sewaktu-waktu. Hubungi kami untuk detail syarat & ketentuan.
            </div>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/6289506516117?text=Halo, saya tertarik dengan promo ${selectedPromo.title}`,
                  '_blank'
                )
              }
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3
                font-semibold text-white transition hover:bg-green-700"
            >
              Hubungi via WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

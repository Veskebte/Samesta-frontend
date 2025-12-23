import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Promo() {
  const navigate = useNavigate()
  const [selectedPromo, setSelectedPromo] = useState(null)

  const promos = [
    {
      id: 1,
      title: 'Studio Special',
      discount: '25% OFF',
      description: 'First month rent for new tenants',
      validUntil: 'Dec 31, 2025',
      terms: 'Valid for new tenants only. Minimum 6 months contract required.'
    },
    {
      id: 2,
      title: '2 Bedroom Deal',
      discount: '30% OFF',
      description: 'Move in this month and save big',
      validUntil: 'Dec 31, 2025',
      terms: 'Available for immediate move-in. Subject to availability.'
    },
    {
      id: 3,
      title: 'Early Bird Special',
      discount: '15% OFF',
      description: 'Book 3 months in advance',
      validUntil: 'Dec 31, 2025',
      terms: 'Booking must be made at least 3 months before move-in date.'
    },
    {
      id: 4,
      title: 'Holiday Promo',
      discount: '20% OFF',
      description: 'Special holiday rates available',
      validUntil: 'Jan 15, 2026',
      terms: 'Valid during holiday season. Limited units available.'
    },
    {
      id: 5,
      title: 'Long Stay Discount',
      discount: '35% OFF',
      description: 'Book 6+ months and get extra savings',
      validUntil: 'Jan 31, 2026',
      terms: 'Minimum 6 months contract. First month payment required upfront.'
    },
    {
      id: 6,
      title: 'Student Special',
      discount: '10% OFF',
      description: 'Valid student ID required',
      validUntil: 'Dec 31, 2025',
      terms: 'Must present valid student ID. Applicable to studio units only.'
    }
  ]

  return (
    <>
      <Navbar />

      {/* PAGE */}
      <section className="min-h-screen bg-gray-100 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">

          {/* HEADER */}
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-3xl md:text-5xl font-extrabold text-gray-900">
              Promo Spesial
            </h1>
            <p className="text-base md:text-lg text-gray-500">
              Dapatkan penawaran terbaik untuk hunian impian Anda
            </p>
          </div>

          {/* PROMO GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promos.map((promo) => (
              <div
                key={promo.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl
                  bg-white shadow-sm transition
                  hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* IMAGE */}
                <div className="relative flex h-56 items-center justify-center bg-gray-200">
                  <span className="text-6xl">🏢</span>
                  <span
                    className="absolute right-4 top-4 rounded-full bg-red-600
                      px-4 py-2 text-base font-bold text-white shadow-lg"
                  >
                    {promo.discount}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {promo.title}
                  </h3>

                  <p className="mb-4 text-gray-500">
                    {promo.description}
                  </p>

                  {/* TERMS */}
                  <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                    <p className="mb-1 font-semibold text-gray-700">
                      Syarat & Ketentuan:
                    </p>
                    {promo.terms}
                  </div>

                  {/* FIXED BUTTON AREA */}
                  <div className="mt-6 md:mt-auto">
                    <p className="mb-4 text-sm text-gray-500">
                      📅 Berlaku sampai <strong>{promo.validUntil}</strong>
                    </p>

                    <button
                      onClick={() => setSelectedPromo(promo)}
                      className="w-full rounded-xl bg-gray-900 py-3
                        font-semibold text-white transition
                        hover:bg-gray-800"
                    >
                      Info Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 rounded-2xl bg-gradient-to-br
              from-[#2D3E50] to-[#4A90A4]
              p-10 text-center text-white shadow-xl"
          >
            <h3 className="mb-3 text-2xl font-bold">
              Masih Ada Pertanyaan?
            </h3>
            <p className="mb-6 text-white/90">
              Tim kami siap membantu Anda menemukan promo terbaik
            </p>
            <button
              onClick={() => window.open('https://wa.me/628123456789', '_blank')}
              className="rounded-xl bg-white px-8 py-3
                font-semibold text-gray-900 transition
                hover:bg-gray-100"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">
                {selectedPromo.title}
              </h3>
              <button
                onClick={() => setSelectedPromo(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="mb-6 text-center">
              <span className="inline-block rounded-full bg-red-600 px-6 py-3
                text-2xl font-bold text-white">
                {selectedPromo.discount}
              </span>
            </div>

            <p className="mb-4 text-gray-600">
              {selectedPromo.description}
            </p>

            <div className="mb-4 rounded-xl bg-gray-100 p-4 text-gray-600">
              <strong>Syarat & Ketentuan:</strong>
              <p className="mt-1">{selectedPromo.terms}</p>
            </div>

            <p className="mb-4 text-sm text-gray-500">
              Berlaku sampai: <strong>{selectedPromo.validUntil}</strong>
            </p>

            <div className="mb-6 rounded-xl bg-blue-50 p-4 text-sm text-blue-700">
              Promo ini terbatas dan dapat berubah sewaktu-waktu.
              Segera hubungi kami untuk mendapatkan penawaran terbaik!
            </div>

            <div className="space-y-3">
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/6289506516117?text=Halo, saya tertarik dengan promo ${selectedPromo.title}`,
                    '_blank'
                  )
                }
                className="w-full rounded-xl bg-green-600 py-3
                  font-semibold text-white transition
                  hover:bg-green-700"
              >
                Hubungi via WhatsApp
              </button>

              <button
                onClick={() => navigate('/inquiry')}
                className="w-full rounded-xl border border-gray-300 py-3
                  font-semibold text-gray-800 transition
                  hover:bg-gray-100"
              >
                Isi Form Inquiry
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

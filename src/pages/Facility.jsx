import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Facilities() {
  const navigate = useNavigate()

  const facilities = [
    { id: 1, name: 'Minimarket', icon: '🏪', description: 'Minimarket 24 jam untuk kebutuhan sehari-hari Anda' },
    { id: 2, name: 'Laundry', icon: '👔', description: 'Layanan laundry profesional untuk kemudahan Anda' },
    { id: 3, name: 'CCTV', icon: '📹', description: 'Sistem CCTV 24/7 untuk keamanan maksimal' },
    { id: 4, name: 'One Gate System', icon: '🚪', description: 'Sistem satu pintu masuk dengan keamanan ketat' },
    { id: 5, name: 'Jogging Track', icon: '🏃', description: 'Jogging track untuk olahraga pagi dan sore Anda' },
    { id: 6, name: 'Lapangan Bermain', icon: '🎪', description: 'Area bermain aman dan nyaman untuk anak-anak' },
    { id: 7, name: 'Kolam Renang', icon: '🏊', description: 'Kolam renang dengan pemandangan kota yang indah' }
  ]

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f7f9fc] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">

          {/* Header */}
          <div className="relative mb-12 text-center">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex items-center gap-2 rounded-xl bg-[#2D3E50] px-6 py-3
                text-white font-semibold transition
                hover:-translate-y-0.5 hover:bg-[#1a2533] hover:shadow-lg
                md:absolute md:left-0 md:top-0"
            >
              ← Kembali
            </button>

            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#2D3E50]">
              Fasilitas Samesta Living
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-gray-500">
              Nikmati berbagai fasilitas premium untuk kenyamanan dan kemudahan hidup Anda
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="group flex h-full cursor-pointer flex-col rounded-2xl border-2
                  border-gray-200 bg-white p-6 text-center transition
                  hover:-translate-y-2 hover:border-[#2D3E50] hover:shadow-xl"
              >
                <div className="mb-4 text-5xl md:text-6xl leading-none">
                  {facility.icon}
                </div>

                <h3 className="mb-2 text-lg md:text-xl font-semibold text-[#2D3E50]">
                  {facility.name}
                </h3>

                <p className="flex-grow text-sm md:text-base text-gray-500">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

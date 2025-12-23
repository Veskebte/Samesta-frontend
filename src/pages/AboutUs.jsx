import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutUs() {
  const navigate = useNavigate()

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
              Tentang Samesta Living
            </h1>
            <p className="mt-3 text-base md:text-lg text-gray-500">
              Hunian Premium dengan Standar Kualitas Terbaik
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* Left */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-md">
                <h2 className="mb-4 text-xl font-bold text-[#2D3E50]">
                  Visi Kami
                </h2>
                <p className="leading-relaxed text-gray-500">
                  Perum Perumnas Proyek Sumatera Selatan memiliki visi yaitu
                  “Menjadi Pengembang Permukiman dan Perumahan Rakyat Terpercaya di Indonesia.”
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-md">
                <h2 className="mb-4 text-xl font-bold text-[#2D3E50]">
                  Misi Kami
                </h2>
                <ul className="space-y-3">
                  {[
                    'Pengembang terpercaya, mengembangkan perumahan dan permukiman yang bernilai tambah untuk kepuasan pelanggan.',
                    'Professional, meningkatkan profesionalitas, pemberdayaan dan kesejahteraan karyawan.',
                    'Bernilai maksimal, memaksimalkan nilai bagi pemegang saham dan pemangku kepentingan lain.',
                    'Sinergi, mengoptimalkan sinergi dengan mitra kerja, pemerintah, BUMN dan instansi lain.',
                    'Berkontribusi, meningkatkan kontribusi positif kepada masyarakat dan lingkungan.'
                  ].map((item, i) => (
                    <li key={i} className="relative pl-6 text-gray-500">
                      <span className="absolute left-0 top-0 font-bold text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h2 className="mb-6 text-xl font-bold text-[#2D3E50]">
                Mengapa Samesta Living?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: '🏢',
                    title: 'Lokasi Strategis',
                    desc: 'Dekat dengan pusat bisnis, transportasi umum, dan fasilitas publik'
                  },
                  {
                    icon: '🔒',
                    title: 'Keamanan 24/7',
                    desc: 'Sistem keamanan terintegrasi dengan CCTV dan One Gate System'
                  },
                  {
                    icon: '✨',
                    title: 'Fasilitas Lengkap',
                    desc: 'Swimming pool, jogging track, minimarket, dan banyak lagi'
                  },
                  {
                    icon: '💼',
                    title: 'Didukung BUMN',
                    desc: 'Kerjasama dengan Pertamina untuk kualitas terjamin'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-[#2D3E50]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-2 gap-6 rounded-3xl p-8 text-center
              bg-gradient-to-br from-[#2D3E50] to-[#4A90A4]
              md:grid-cols-4 md:gap-8 md:p-12"
          >
            {[
              { value: '300+', label: 'Unit Apartemen' },
              { value: '7', label: 'Fasilitas Premium' },
              { value: '24/7', label: 'Keamanan & Pelayanan' },
              { value: '98%', label: 'Kepuasan Penghuni' }
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="mb-2 text-3xl md:text-4xl font-extrabold text-white">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base text-white/90">
                  {stat.label}
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

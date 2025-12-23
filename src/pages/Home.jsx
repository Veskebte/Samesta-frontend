import Apartemenlogo from '../assets/apartemen-logo.png'
import AboutUsLogo from '../assets/about-us-logo.png'
import Fasilitaslogo from '../assets/facilities-logo.png'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import MonthlyPromo from '../components/MonthlyPromo'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroCarousel />

      {/* Cards Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Apartemen */}
            <a href="/apartments" className="group">
              <div
                className="flex h-full flex-col items-center rounded-2xl border bg-white p-8 text-center
                  shadow-sm transition-all duration-300
                  hover:-translate-y-2.5 hover:border-blue-600 hover:shadow-xl"
              >
                <img
                  src={Apartemenlogo}
                  alt="Apartment Icon"
                  className="mb-4 h-36 w-36 md:h-40 md:w-40"
                />

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Apartemen
                </h3>

                <p className="mb-6 flex-grow text-gray-500">
                  Jelajahi pilihan apartemen studio dan 2 kamar tidur kami
                </p>

                <button
                  className="rounded-full bg-gray-900 px-10 py-2.5 text-sm font-semibold text-white
                    transition hover:bg-gray-800"
                >
                  Lihat Apartemen
                </button>
              </div>
            </a>

            {/* Fasilitas */}
            <a href="/facilities" className="group">
              <div
                className="flex h-full flex-col items-center rounded-2xl border bg-white p-8 text-center
                  shadow-sm transition-all duration-300
                  hover:-translate-y-2.5 hover:border-blue-600 hover:shadow-xl"
              >
                <img
                  src={Fasilitaslogo}
                  alt="Fasilitas Icon"
                  className="mb-4 h-36 w-36 md:h-40 md:w-40"
                />

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Fasilitas
                </h3>

                <p className="mb-6 flex-grow text-gray-500">
                  Temukan fasilitas dan kemudahan kelas dunia kami
                </p>

                <button
                  className="rounded-full bg-gray-900 px-10 py-2.5 text-sm font-semibold text-white
                    transition hover:bg-gray-800"
                >
                  Lihat Fasilitas
                </button>
              </div>
            </a>

            {/* Tentang Kami */}
            <a href="/about" className="group">
              <div
                className="flex h-full flex-col items-center rounded-2xl border bg-white p-8 text-center
                  shadow-sm transition-all duration-300
                  hover:-translate-y-2.5 hover:border-blue-600 hover:shadow-xl"
              >
                <img
                  src={AboutUsLogo}
                  alt="About Us Icon"
                  className="mb-4 h-36 w-36 md:h-40 md:w-40"
                />

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Tentang Kami
                </h3>

                <p className="mb-6 flex-grow text-gray-500">
                  Pelajari lebih lanjut tentang Samesta Living dan misi kami
                </p>

                <button
                  className="rounded-full bg-gray-900 px-10 py-2.5 text-sm font-semibold text-white
                    transition hover:bg-gray-800"
                >
                  Tentang Kami
                </button>
              </div>
            </a>

          </div>
        </div>
      </section>

      <MonthlyPromo />
      <Footer />
    </div>
  )
}

export default HomePage

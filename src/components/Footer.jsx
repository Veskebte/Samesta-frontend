import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t-4 border-emerald-500">
      <div className="mx-auto max-w-7xl px-4 py-12">

        {/* Top Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">
              Apartemen Samesta Jakabaring
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Hunian premium dengan keamanan 24 jam, lokasi strategis, dan fasilitas lengkap
              untuk gaya hidup modern.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-4 text-base font-semibold text-white">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-emerald-400 transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/apartments" className="text-slate-300 hover:text-emerald-400 transition">
                  Apartemen
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-slate-300 hover:text-emerald-400 transition">
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-emerald-400 transition">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-4 text-base font-semibold text-white">
              Hubungi Kami
            </h5>
            <p className="mb-2 text-sm text-slate-300">
              Silaberanti, Kecamatan Seberang Ulu I, Kota Palembang, Sumatera Selatan
            </p>
            <p className="mb-2 text-sm text-slate-300">
              Telp: (021) 555 0199
            </p>
            <p className="mb-3 text-sm text-slate-300">
              Email: hello@samesta.id
            </p>

            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <a
                href="https://www.instagram.com/daftoness/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition"
              >
                Facebook
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h5 className="mb-4 text-base font-semibold text-white">
              Lokasi Kita
            </h5>
            <div className="h-56 overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                title="Lokasi Samesta"
                src="https://www.google.com/maps?q=https://maps.app.goo.gl/xuKn3LxDKEcRWN3J9&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/20 pt-4 text-xs text-slate-300 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Samesta Living. All rights reserved.
          </span>
          <span>
            Workshop | Privacy Policy | Terms
          </span>
        </div>

      </div>
    </footer>
  )
}

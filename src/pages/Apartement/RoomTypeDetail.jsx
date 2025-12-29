import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RoomDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Dummy data (nanti bisa ganti API)
  const room = {
    name: "Studio A-301",
    size: "24 m²",
    description:
      "Unit studio yang nyaman dan efisien, cocok untuk profesional muda atau mahasiswa.",
    price: 1180000,
    facilities: [
      "Kasur",
      "AC",
      "Kamar mandi dalam",
      "Kitchen set",
      "Lemari pakaian",
      "Internet ready",
    ],
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">

            {/* BACK */}
            <button
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex items-center gap-2
                rounded-xl bg-slate-800 px-5 py-3
                font-semibold text-white transition
                hover:bg-slate-700"
            >
              ← Kembali
            </button>

            {/* IMAGE */}
            <div className="mb-8 flex h-[320px] items-center justify-center
              rounded-3xl bg-gradient-to-br
              from-indigo-500 to-purple-600 text-6xl text-white">
              🏢
            </div>

            {/* DETAIL CARD */}
            <div className="rounded-3xl bg-white p-8 shadow">
              <h1 className="mb-1 text-3xl font-bold text-slate-800">
                {room.name}
              </h1>
              <p className="mb-6 text-sm text-gray-500">
                Luas unit: {room.size}
              </p>

              <h2 className="mb-2 text-xl font-bold text-slate-800">
                Deskripsi
              </h2>
              <p className="mb-8 text-gray-600 leading-relaxed">
                {room.description}
              </p>

              <h2 className="mb-4 text-xl font-bold text-slate-800">
                Fasilitas
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {room.facilities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl
                      bg-gray-50 px-4 py-3 text-gray-700"
                  >
                    <span className="text-emerald-500 font-bold">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE / PRICE CARD */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-lg">

              {/* PRICE */}
              <div className="mb-6 rounded-2xl bg-gradient-to-r
                from-slate-700 to-teal-600 px-6 py-5 text-white">
                <p className="mb-1 text-sm opacity-90">
                  Harga Sewa
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-extrabold">
                    Rp {room.price.toLocaleString("id-ID")}
                  </span>
                  <span className="mb-1 text-sm font-medium opacity-90">
                    /bulan
                  </span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mb-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => navigate("/inquiry")}
                  className="rounded-xl bg-slate-800 py-3
                    font-semibold text-white transition
                    hover:-translate-y-0.5 hover:bg-slate-700
                    hover:shadow-md"
                >
                  Booking Sekarang
                </button>

                <button
                  onClick={() => navigate("/apartments")}
                  className="rounded-xl bg-gray-100 py-3
                    font-semibold text-slate-800 transition
                    hover:bg-gray-200"
                >
                  Kembali ke Daftar
                </button>
              </div>

              {/* CONTACT */}
              <div className="rounded-2xl bg-gray-50 p-5">
                <h5 className="mb-3 font-bold text-slate-800">
                  Hubungi Kami
                </h5>

                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span>📞</span>
                  <span>+62 812-3456-7890</span>
                </div>

                <div className="mt-2 flex items-center gap-3 text-sm text-gray-700">
                  <span>📧</span>
                  <span>samestajakabaring@gmail.com</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

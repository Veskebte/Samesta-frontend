import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function ApartmentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock Data
  const apartment = {
    id,
    name: "Studio A-301",
    type: "Studio",
    floor: 3,
    size: "24 m²",
    price: 1180000,
    status: "Tersedia",
    tower: "Tower 2",
    building: "Samesta Jakabaring",
    description:
      "Apartemen studio yang nyaman dan modern dengan pemandangan kota. Dilengkapi dengan fasilitas lengkap dan akses mudah ke berbagai tempat penting di Palembang.",
    facilities: [
      "AC",
      "Kitchen Set",
      "Water Heater",
      "Internet Fiber",
      "TV Cable",
      "Balkon",
    ],
    buildingFacilities: [
      "Swimming Pool",
      "Gym & Fitness Center",
      "Jogging Track",
      "24/7 Security",
      "CCTV",
      "Parking Area",
      "Mini Market",
    ],
    nearbyPlaces: [
      { name: "Jakabaring Sport City", distance: "500 m" },
      { name: "Palembang Icon Mall", distance: "3 km" },
      { name: "Charitas Hospital", distance: "2.5 km" },
      { name: "Unsri Campus", distance: "4 km" },
    ],
    images: ["🏢", "🛏️", "🍳", "🚿"],
    specs: {
      bedrooms: 1,
      bathrooms: 1,
      furnished: "Semi Furnished",
      facing: "Timur",
      condition: "Baru",
    },
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-6">

            {/* IMAGE */}
            <div className="h-[260px] md:h-[420px] rounded-3xl
              bg-gradient-to-br from-indigo-500 to-purple-600
              flex items-center justify-center text-white text-6xl">
              {apartment.images[selectedImage]}
            </div>

            {/* DETAIL CARD */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow">

              {/* STATUS */}
              <span className="inline-block mb-4 rounded-full bg-emerald-100
                px-4 py-2 text-sm font-semibold text-emerald-700">
                {apartment.status}
              </span>

              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                {apartment.name}
              </h1>

              <p className="text-gray-500 mb-6">
                {apartment.tower} • {apartment.building} • Lantai {apartment.floor}
              </p>

              {/* SPEC */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  ["Luas", apartment.size],
                  ["Kamar Tidur", apartment.specs.bedrooms],
                  ["Kamar Mandi", apartment.specs.bathrooms],
                  ["Furnish", apartment.specs.furnished],
                  ["Menghadap", apartment.specs.facing],
                  ["Kondisi", apartment.specs.condition],
                ].map(([label, value], i) => (
                  <div key={i} className="rounded-xl bg-gray-50 p-4 text-center">
                    <p className="text-sm text-gray-500 mb-1">{label}</p>
                    <p className="font-semibold text-slate-800">{value}</p>
                  </div>
                ))}
              </div>

              {/* DESC */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Deskripsi
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {apartment.description}
              </p>

              {/* FACILITIES */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Fasilitas Unit
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {apartment.facilities.map((f, i) => (
                  <div key={i} className="flex items-center gap-3
                    rounded-lg bg-gray-50 p-3">
                    <span className="flex h-6 w-6 items-center justify-center
                      rounded-full bg-slate-800 text-xs text-white">
                      ✓
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Fasilitas Gedung
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {apartment.buildingFacilities.map((f, i) => (
                  <div key={i} className="flex items-center gap-3
                    rounded-lg bg-gray-50 p-3">
                    <span className="flex h-6 w-6 items-center justify-center
                      rounded-full bg-slate-800 text-xs text-white">
                      ✓
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Lokasi Terdekat
              </h3>
              <ul className="divide-y">
                {apartment.nearbyPlaces.map((p, i) => (
                  <li key={i} className="flex justify-between py-3">
                    <span>{p.name}</span>
                    <span className="text-gray-500">{p.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-lg">

              {/* PRICE */}
              <div
                className="mb-6 rounded-2xl bg-gradient-to-r
                from-[#355f73] to-[#4f8fa3] px-6 py-5 text-white"
              >
                <p className="mb-1 text-sm opacity-90">
                  Harga Sewa
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-extrabold">
                    Rp 1.180.000
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
                  className="rounded-xl bg-[#2c3e50] py-3
                    font-semibold text-white transition
                    hover:-translate-y-0.5 hover:bg-[#243342]
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

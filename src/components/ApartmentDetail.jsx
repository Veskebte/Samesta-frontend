import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function ApartmentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock data
  const apartment = {
    id,
    name: "Studio A-301",
    type: "Studio",
    floor: 3,
    size: "24 m²",
    price: "Rp 2.500.000",
    period: "/bulan",
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
      "Laundry Service",
      "Children Playground",
    ],
    nearbyPlaces: [
      { name: "Jakabaring Sport City", distance: "500 m" },
      { name: "Palembang Icon Mall", distance: "3 km" },
      { name: "Charitas Hospital", distance: "2.5 km" },
      { name: "Unsri Campus", distance: "4 km" },
    ],
    images: ["🏢", "🛏️", "🍳", "🚿"],
    specifications: {
      bedrooms: "1",
      bathrooms: "1",
      furnished: "Semi Furnished",
      facing: "Timur",
      condition: "Baru",
    },
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-8 space-y-6">

            {/* IMAGE */}
            <div className="h-[250px] md:h-[400px] rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl md:text-7xl">
              {apartment.images[selectedImage]}
            </div>

            {/* DETAIL CARD */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow">

              {/* STATUS */}
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold text-sm">
                {apartment.status}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {apartment.name}
              </h1>

              <p className="text-gray-500 mb-6">
                {apartment.tower} • {apartment.building} • Lantai {apartment.floor}
              </p>

              {/* SPEC */}
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                Spesifikasi
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  ["Luas", apartment.size],
                  ["Kamar Tidur", apartment.specifications.bedrooms],
                  ["Kamar Mandi", apartment.specifications.bathrooms],
                  ["Furnish", apartment.specifications.furnished],
                  ["Menghadap", apartment.specifications.facing],
                  ["Kondisi", apartment.specifications.condition],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl p-4 text-center"
                  >
                    <div className="text-sm text-gray-500 mb-1">
                      {label}
                    </div>
                    <div className="font-semibold text-slate-800">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* DESC */}
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                Deskripsi
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {apartment.description}
              </p>

              {/* FACILITY */}
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                Fasilitas Unit
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {apartment.facilities.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="h-6 w-6 flex items-center justify-center bg-slate-800 text-white rounded-full text-xs">
                      ✓
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-3">
                Fasilitas Gedung
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {apartment.buildingFacilities.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="h-6 w-6 flex items-center justify-center bg-slate-800 text-white rounded-full text-xs">
                      ✓
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-3">
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

          {/* RIGHT */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">

              {/* PRICE */}
              <div className="bg-gradient-to-br from-slate-800 to-teal-600 text-white rounded-2xl p-6">
                <div className="text-sm opacity-90 mb-1">
                  Harga Sewa
                </div>
                <div className="text-3xl font-bold">
                  {apartment.price}
                  <span className="text-base font-normal opacity-90">
                    {apartment.period}
                  </span>
                </div>
              </div>

              {/* ACTION */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => navigate("/inquiry")}
                  className="py-4 rounded-xl bg-slate-800 text-white font-semibold hover:-translate-y-0.5 hover:shadow-lg transition"
                >
                  Booking Sekarang
                </button>

                <button
                  onClick={() => alert("Form viewing segera hadir")}
                  className="py-4 rounded-xl border-2 border-slate-800 text-slate-800 font-semibold hover:bg-slate-800 hover:text-white transition"
                >
                  Jadwalkan Viewing
                </button>
              </div>

              {/* CONTACT */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="font-semibold mb-2">
                  Hubungi Kami
                </div>
                <p className="text-sm text-gray-600">
                  📞 +62 812-3456-7890
                </p>
                <p className="text-sm text-gray-600">
                  📧 info@samesta.co.id
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { useNavigate } from "react-router-dom"

export default function ApartmentList({ filters }) {
  const navigate = useNavigate()

  const apartments = [
    {
      id: 1,
      name: "Studio A-301",
      type: "studio",
      price: 2500000,
      bedrooms: 1,
      size: "24 m²",
    },
    {
      id: 2,
      name: "2BR B-1205",
      type: "2br",
      price: 3200000,
      bedrooms: 2,
      size: "36 m²",
    },
  ]

  const filtered = apartments.filter((apt) => {
    if (filters.roomType && apt.type !== filters.roomType) return false

    if (
      filters.floor &&
      filters.floor !== "semua" &&
      apt.bedrooms !== Number(filters.floor)
    ) {
      return false
    }

    return true
  })



  return (
    <div className="animate-fadeIn">

      {/* GRID */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white p-12 text-center shadow">
          <p className="text-gray-500">
            Tidak ada apartemen yang sesuai filter
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((apt) => (
            <div
              key={apt.id}
              className="group flex h-full flex-col overflow-hidden
                rounded-2xl bg-white shadow-sm transition
                hover:-translate-y-2 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600
                flex items-center justify-center text-white text-4xl">
                🏢
                <span className="absolute right-4 top-4 rounded-full bg-green-500
                  px-3 py-1 text-xs font-semibold text-white">
                  Tersedia
                </span>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {apt.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {apt.bedrooms} Kamar Tidur • {apt.size}
                </p>

                <p className="mt-4 text-xl font-extrabold text-gray-900">
                  Rp {apt.price.toLocaleString()}
                  <span className="ml-1 text-sm font-normal text-gray-500">
                    /bulan
                  </span>
                </p>

                {/* ACTION */}
                <button
                  onClick={() => navigate(`/apartments/${apt.id}`)}
                  className="mt-auto rounded-xl bg-gray-900 py-3 text-sm
                    font-semibold text-white transition
                    hover:bg-gray-800"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

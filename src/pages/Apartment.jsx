import { useState } from "react"
import Navbar from "../components/Navbar"
import ApartmentList from "../components/ApartmentList"
import ApartmentFilter from "../components/ApartmentFilter"

export default function Apartment() {
  const [filters, setFilters] = useState({
    transactionType: "rent", // rent | buy
    type: "",
    bedrooms: "",
    minPrice: "",
    maxPrice: "",
  })

  const handleSearch = (searchFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...searchFilters,
    }))
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="mx-auto max-w-7xl space-y-10">

          {/* ================= HEADER ================= */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">
                Apartemen Samesta
              </h1>
              <p className="text-gray-500">
                Pilih unit terbaik sesuai kebutuhan Anda
              </p>
            </div>
          </div>

          {/* ================= FILTER ================= */}
          <ApartmentFilter
            filters={filters}
            onSearch={handleSearch}
          />

          {/* ================= RESULT ================= */}
          <ApartmentList filters={filters} />
        </div>
      </section>
    </>
  )
}

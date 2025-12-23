import { useState } from "react"
import logo from "../assets/samesta-logo.png"

export default function ApartmentFilter({ onSearch }) {
  const [preference, setPreference] = useState("sewa") // sewa | beli
  const [roomType, setRoomType] = useState("studio")   // studio | twoBed
  const [floor, setFloor] = useState("semua")

  const handleSearch = () => {
    onSearch({ preference, roomType, floor })
  }

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="mx-auto max-w-xl animate-fadeIn">

        {/* LOGO */}
        <div className="mb-8 flex justify-center">
          <img
            src={logo}
            alt="Samesta Logo"
            className="h-24 object-contain"
          />
        </div>

        {/* TITLE */}
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Temukan Preferensimu
        </h2>

        <div className="mb-10 flex gap-4">
          <button
            onClick={() => setPreference("sewa")}
            className={`flex-1 rounded-2xl py-4 text-lg font-semibold transition
              ${
                preference === "sewa"
                  ? "bg-emerald-400 text-slate-800"
                  : "bg-gray-200 text-gray-500"
              }`}
          >
            Sewa
          </button>

          <button
            onClick={() => setPreference("beli")}
            className={`flex-1 rounded-2xl py-4 text-lg font-semibold transition
              ${
                preference === "beli"
                  ? "bg-emerald-400 text-slate-800"
                  : "bg-gray-200 text-gray-500"
              }`}
          >
            Beli
          </button>
        </div>

        {/* ROOM TYPE */}
        <div className="mb-10 grid grid-cols-2 gap-4">

          {/* STUDIO */}
          <button
            onClick={() => setRoomType("studio")}
            className={`flex flex-col items-center gap-4 rounded-2xl border-4 p-8 transition
              ${
                roomType === "studio"
                  ? "border-slate-800 bg-slate-800 text-white"
                  : "border-gray-200 bg-gray-200 text-gray-500"
              }`}
          >
            <div className="flex gap-2">
              <div className="h-10 w-10 rounded-lg bg-white/90" />
            </div>
            <span className="text-lg font-semibold">Studio</span>
          </button>

          {/* TWO BED */}
          <button
            onClick={() => setRoomType("twoBed")}
            className={`flex flex-col items-center gap-4 rounded-2xl border-4 p-8 transition
              ${
                roomType === "twoBed"
                  ? "border-slate-800 bg-slate-800 text-white"
                  : "border-gray-200 bg-gray-200 text-gray-500"
              }`}
          >
            <div className="flex gap-2">
              <div className="h-10 w-10 rounded-lg bg-white/90" />
              <div className="h-10 w-10 rounded-lg bg-white/90" />
            </div>
            <span className="text-lg font-semibold">Two Bed</span>
          </button>
        </div>

        {/* FLOOR */}
        <div className="mb-8">
          <label className="mb-3 block font-semibold text-slate-800">
            Pilih Lantai
          </label>
          <select
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="w-full rounded-xl border-2 border-gray-200 bg-white
              px-4 py-4 font-medium text-slate-800
              focus:outline-none focus:ring-2 focus:ring-slate-800"
          >
            <option value="semua">Semua Lantai</option>
            <option value="1">Lantai 1</option>
            <option value="2">Lantai 2</option>
            <option value="3">Lantai 3</option>
            <option value="4">Lantai 4</option>
            <option value="5">Lantai 5</option>
          </select>
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="button"   
          onClick={handleSearch}
          className="w-full rounded-xl bg-slate-800 py-4 text-lg font-semibold
            text-white transition hover:-translate-y-1 hover:bg-slate-700
            hover:shadow-lg"
        >
          Cari Unit
        </button>
      </div>
    </section>
  )
}

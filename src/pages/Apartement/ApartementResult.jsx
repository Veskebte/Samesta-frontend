import { useLocation, useNavigate } from "react-router-dom"
import ApartmentList from "../../components/ApartmentList"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
export default function ApartmentResult() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const filters = state || {}
  const [visible, setVisible] = useState(false)
  useEffect(() => {
        setVisible(true)
    }, [])

    
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-10 px-4">
        <div
            className={`mx-auto max-w-7xl space-y-8
                transition-all duration-300 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            >

          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold">
              Hasil Pencarian
            </h1>

            <button
              onClick={() => navigate("/apartments")}
              className="text-sm font-semibold hover:underline"
            >
              ← Ubah Filter
            </button>
          </div>

          <ApartmentList filters={filters} />
        </div>
      </section>
    </>
  )
}

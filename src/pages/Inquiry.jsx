import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Inquiry() {
  const navigate = useNavigate()

  const fileInputRef = useRef(null)
//   const videoRef = useRef(null)
//   const canvasRef = useRef(null)

//   const [stream, setStream] = useState(null)
//   const [showCamera, setShowCamera] = useState(false)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [alert, setAlert] = useState(null)

  const [formData, setFormData] = useState({
    userId: "",
    unitId: "",
    purchaseType: "rent",
    address: "",
    idCardPhoto: null,
  })

  /* ================= HANDLERS ================= */

  const showAlert = (msg) => {
    setAlert(msg)
    setTimeout(() => setAlert(null), 4000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (file.size > 5_000_000) {
      showAlert("Ukuran file terlalu besar (maks 5MB)")
      return
    }

    setFormData((prev) => ({ ...prev, idCardPhoto: file }))

    const reader = new FileReader()
    reader.onloadend = () => setPhotoPreview(reader.result)
    reader.readAsDataURL(file)
  }

//   const startCamera = async () => {
//     try {
//       const mediaStream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "environment" },
//       })
//       setStream(mediaStream)
//       setShowCamera(true)
//       setTimeout(() => (videoRef.current.srcObject = mediaStream), 100)
//     } catch {
//       showAlert("Tidak dapat mengakses kamera")
//     }
//   }

//   const capturePhoto = () => {
//     const video = videoRef.current
//     const canvas = canvasRef.current

//     canvas.width = video.videoWidth
//     canvas.height = video.videoHeight

//     const ctx = canvas.getContext("2d")
//     ctx.drawImage(video, 0, 0)

//     canvas.toBlob((blob) => {
//       const file = new File([blob], "ktp.jpg", { type: "image/jpeg" })
//       setFormData((p) => ({ ...p, idCardPhoto: file }))
//       setPhotoPreview(canvas.toDataURL("image/jpeg"))
//       stopCamera()
//     })
//   }

//   const stopCamera = () => {
//     stream?.getTracks().forEach((t) => t.stop())
//     setStream(null)
//     setShowCamera(false)
//   }

  const removePhoto = () => {
    setFormData((p) => ({ ...p, idCardPhoto: null }))
    setPhotoPreview(null)
    fileInputRef.current.value = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.idCardPhoto) {
      showAlert("Harap upload foto KTP")
      return
    }

    const inquiries = JSON.parse(localStorage.getItem("inquiries") || "[]")
    inquiries.push({
      ...formData,
      id: Date.now(),
      status: "pending",
      createdAt: new Date().toISOString(),
      idCardPhoto: photoPreview,
    })

    localStorage.setItem("inquiries", JSON.stringify(inquiries))
    setShowSuccess(true)
  }

  /* ================= UI ================= */

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto animate-fadeIn">

          {/* CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">Form Inquiry</h2>
              <p className="text-gray-500">
                Lengkapi data di bawah untuk melanjutkan proses
              </p>
            </div>

            {alert && (
              <div className="mb-4 rounded-xl bg-red-100 text-red-700 px-4 py-3">
                {alert}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* USER ID */}
              <div>
                <label className="font-medium">User ID / NIK</label>
                <input
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border px-4 py-3"
                />
              </div>

              {/* UNIT */}
              <div>
                <label className="font-medium">Nomor Unit</label>
                <input
                  name="unitId"
                  value={formData.unitId}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border px-4 py-3"
                />
              </div>

              {/* TRANSACTION */}
              <div>
                <label className="font-medium">Tipe Transaksi</label>
                <div className="mt-2 flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="purchaseType"
                      value="rent"
                      checked={formData.purchaseType === "rent"}
                      onChange={handleChange}
                    />
                    Sewa
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="purchaseType"
                      value="sale"
                      onChange={handleChange}
                    />
                    Beli
                  </label>
                </div>
              </div>

              {/* ADDRESS */}
              <div>
                <label className="font-medium">Alamat Lengkap</label>
                <textarea
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl border px-4 py-3"
                />
              </div>

              {/* PHOTO */}
              <div>
                <label className="font-medium">Foto KTP</label>

                {!photoPreview && (
                  <div className="mt-2 border-2 border-dashed rounded-xl p-6 text-center bg-gray-50">
                    <input
                      type="file"
                      ref={fileInputRef}
                      hidden
                      accept="image/*"
                      onChange={handleFileUpload}
                    />

                    <div className="flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="rounded-xl border py-2"
                      >
                        📁 Upload File
                      </button>
                      {/* <button
                        type="button"
                        onClick={startCamera}
                        className="rounded-xl border py-2"
                      >
                        📷 Ambil dari Kamera
                      </button> */}
                    </div>
                  </div>
                )}

                {/* {showCamera && (
                  <div className="mt-3 bg-black p-3 rounded-xl">
                    <video ref={videoRef} autoPlay className="w-full rounded" />
                    <canvas ref={canvasRef} hidden />
                    <div className="flex gap-3 mt-3">
                      <button
                        type="button"
                        onClick={capturePhoto}
                        className="flex-1 bg-gray-900 text-white py-2 rounded-xl"
                      >
                        Ambil Foto
                      </button>
                      <button
                        type="button"
                        onClick={stopCamera}
                        className="px-4 border rounded-xl"
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                )} */}

                {photoPreview && (
                  <div className="mt-3 border-2 border-green-500 rounded-xl p-4 text-center">
                    <img
                      src={photoPreview}
                      alt="preview"
                      className="mx-auto rounded-lg max-h-72"
                    />
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="mt-3 text-red-600 font-medium"
                    >
                      🗑 Hapus Foto
                    </button>
                  </div>
                )}
              </div>

              {/* ACTION */}
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800"
                >
                  Kirim Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="w-full border py-3 rounded-xl"
                >
                  Batal
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 text-center max-w-md w-full animate-scaleIn">
            <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-green-600 flex items-center justify-center text-white text-4xl">
              ✓
            </div>
            <h3 className="text-xl font-bold mb-2">
              Inquiry Berhasil Dikirim!
            </h3>
            <p className="text-gray-600 mb-6">
              Tim kami akan segera menghubungi Anda
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-900 text-white px-8 py-3 rounded-xl"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      )}
    </>
  )
}

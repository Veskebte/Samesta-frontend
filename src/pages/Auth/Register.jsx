import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/samesta-logo.png'
import { authAPI } from '../../services/api'

const saveUserToStorage = (user) => {
  if (user && typeof user === 'object') {
    localStorage.setItem('user', JSON.stringify(user))
  } else {
    localStorage.removeItem('user')
  }
}

export default function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Password dan Konfirmasi Password tidak cocok!')
      return
    }

    setLoading(true)

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        password_confirmation: formData.confirmPassword
      }

      const response = await authAPI.register(payload)

      const token = response?.token || response?.data?.token
      token
        ? localStorage.setItem('authToken', token)
        : localStorage.removeItem('authToken')

      saveUserToStorage(response?.user || response?.data?.user)
      navigate('/')
    } catch (err) {
      if (err.response?.data?.errors) {
        const messages = Object.values(err.response.data.errors).flat().join(', ')
        setError(messages)
      } else {
        setError(err.response?.data?.message || 'Registrasi gagal. Silakan coba lagi.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc] px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-10 md:p-8">

        {/* Logo */}
        <div className="mb-6 text-center">
          <img src={logo} alt="Samesta Logo" className="mx-auto h-20" />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-center text-2xl font-bold text-[#2D3E50]">
          Buat Akun Baru
        </h2>
        <p className="mt-1 mb-8 text-center text-sm text-gray-500">
          Daftar untuk mengakses semua layanan Samesta Living
        </p>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#2D3E50]">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Masukkan nama lengkap Anda"
              value={formData.fullName}
              onChange={handleChange}
              disabled={loading}
              required
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2D3E50]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                required
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2D3E50]">
                No. Telepon
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="08xxxxxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                required
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2D3E50]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Minimal 8 karakter"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={8}
                  disabled={loading}
                  required
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 pr-12 text-sm
                    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <i className={`bi bi-eye${showPassword ? '-slash' : ''}`} />
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2D3E50]">
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Ulangi password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  minLength={8}
                  disabled={loading}
                  required
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 pr-12 text-sm
                    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <i className={`bi bi-eye${showConfirmPassword ? '-slash' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              required
              disabled={loading}
              className="mt-1 rounded border-gray-300"
            />
            <span>
              Saya setuju dengan{' '}
              <a href="#" className="font-medium text-indigo-500 hover:underline">
                Syarat & Ketentuan
              </a>{' '}
              dan{' '}
              <a href="#" className="font-medium text-indigo-500 hover:underline">
                Kebijakan Privasi
              </a>
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#2D3E50] py-3 font-semibold text-white transition
              hover:-translate-y-0.5 hover:bg-[#1a2533] hover:shadow-lg
              disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Mendaftar...
              </span>
            ) : (
              'Daftar Sekarang'
            )}
          </button>

          {/* Login Link */}
          <p className="pt-2 text-center text-sm text-gray-500">
            Sudah punya akun?{' '}
            <a
              href="/login"
              className="font-semibold text-indigo-500 hover:underline"
            >
              Masuk di sini
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

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

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const loginResponse = await authAPI.login(email, password)
      const token = loginResponse?.token || loginResponse?.data?.token

      token
        ? localStorage.setItem('authToken', token)
        : localStorage.removeItem('authToken')

      try {
        const profile = await authAPI.getProfile()
        saveUserToStorage(profile?.data || profile)
      } catch {
        saveUserToStorage(loginResponse?.user || null)
      }

      navigate('/', { replace: true })
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message)
      } else if (err.response?.status === 401) {
        setError('Email atau password salah.')
      } else {
        setError('Login gagal. Silakan coba lagi.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-10 md:p-8">
        
        {/* Logo */}
        <div className="mb-6 text-center">
          <img
            src={logo}
            alt="Samesta Jakabaring"
            className="mx-auto h-20"
          />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-center text-2xl font-bold text-[#2D3E50]">
          Selamat Datang Kembali
        </h2>
        <p className="mt-1 text-center text-sm text-gray-500 mb-8">
          Masuk ke akun Samesta Living Anda
        </p>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 border border-red-200">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#2D3E50]">
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                disabled:opacity-70"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#2D3E50]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan password Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 pr-12 text-sm
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                  disabled:opacity-70"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                disabled={loading}
              >
                <i className={`bi bi-eye${showPassword ? '-slash' : ''}`} />
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              Ingat Saya
            </label>
            <a
              href="#"
              className="font-medium text-indigo-500 hover:text-purple-600 hover:underline"
            >
              Lupa Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#2D3E50] py-3 font-semibold text-white transition
              hover:-translate-y-0.5 hover:bg-[#1a2533] hover:shadow-lg
              disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Memproses...
              </span>
            ) : (
              'Masuk'
            )}
          </button>

          {/* Register */}
          <p className="pt-2 text-center text-sm text-gray-500">
            Belum punya akun?{' '}
            <a
              href="/register"
              className="font-semibold text-indigo-500 hover:text-purple-600 hover:underline"
            >
              Daftar Sekarang
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

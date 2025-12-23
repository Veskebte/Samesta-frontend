import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/samesta-logo.png'
import { authAPI } from '../services/api'

export default function Navbar() {
  const [user, setUser] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [roomOpen, setRoomOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const raw = localStorage.getItem('user')
    if (!raw) return
    try {
      const parsed = JSON.parse(raw)
      if (parsed && typeof parsed === 'object') setUser(parsed)
      else localStorage.removeItem('user')
    } catch {
      localStorage.removeItem('user')
    }
  }, [])

  const handleLogout = async () => {
    try {
      await authAPI.logout()
    } catch {}
    finally {
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      setUser(null)
      navigate('/')
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-[72px] items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Dropdown: Tipe Ruangan */}
            <div className="relative">
              <button
                onClick={() => setRoomOpen(v => !v)}
                className="flex items-center gap-1 font-semibold text-gray-800 hover:opacity-100 opacity-85"
              >
                Tipe Ruangan
                <span className="text-xs opacity-60">▾</span>
              </button>

              {roomOpen && (
                <div
                  onMouseLeave={() => setRoomOpen(false)}
                  className="absolute left-0 mt-3 w-60 rounded-2xl border bg-white p-2 shadow-xl"
                >
                  <Link
                    to="/room-type/studio"
                    className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Studio
                  </Link>
                  <Link
                    to="/room-type/2bedroom"
                    className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    2 Bedroom
                  </Link>
                </div>
              )}
            </div>

            <Link to="/promo" className="font-semibold text-gray-800 opacity-85 hover:opacity-100">
              Promo
            </Link>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link to="/login" className="font-semibold text-gray-800">Login</Link>
                <span className="text-gray-300">|</span>
                <Link to="/register" className="font-semibold text-gray-800">Register</Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(v => !v)}
                  className="font-semibold text-gray-800"
                >
                  👤 {user.name || 'User'}
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl border bg-white shadow-xl">
                    <div className="px-4 py-3">
                      <div className="font-bold">{user.name || 'User'}</div>
                      <div className="text-sm text-gray-500">{user.email || '-'}</div>
                      <div className="text-sm text-gray-500">
                        {user.phone || user.telephone || '-'}
                      </div>
                    </div>
                    <div className="border-t">
                      <Link
                        to="/inquiry"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        My Inquiries
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left font-semibold text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden flex flex-col gap-1 p-2"
          >
            <span className="h-0.5 w-6 bg-gray-800" />
            <span className="h-0.5 w-6 bg-gray-800" />
            <span className="h-0.5 w-6 bg-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 text-gray-100">
          <ul className="space-y-2 px-4 py-4">
            <li className="text-xs uppercase tracking-wide text-gray-400">Menu</li>

            <li>
              <Link to="/room-type/studio" className="block rounded-lg px-3 py-2 hover:bg-white/10">
                Studio
              </Link>
            </li>
            <li>
              <Link to="/room-type/2bedroom" className="block rounded-lg px-3 py-2 hover:bg-white/10">
                2 Bedroom
              </Link>
            </li>
            <li>
              <Link to="/promo" className="block rounded-lg px-3 py-2 hover:bg-white/10">
                Promo
              </Link>
            </li>

            <li className="my-2 h-px bg-white/10" />

            {!user ? (
              <>
                <li>
                  <Link to="/login" className="block rounded-lg px-3 py-2 hover:bg-white/10">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="block rounded-lg px-3 py-2 hover:bg-white/10">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="px-3 py-2">
                  <div className="font-bold">{user.name || 'User'}</div>
                  <div className="text-sm text-gray-400">{user.email || '-'}</div>
                  <div className="text-sm text-gray-400">
                    {user.phone || user.telephone || '-'}
                  </div>
                </li>
                <li>
                  <Link to="/inquiry" className="block rounded-lg px-3 py-2 hover:bg-white/10">
                    My Inquiries
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full rounded-lg px-3 py-2 text-left text-red-400 hover:bg-white/10"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  )
}

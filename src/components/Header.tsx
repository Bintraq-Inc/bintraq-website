import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import bintraqLogo from '@/assets/bintraq-logo.png'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'Solutions', 
    path: '/solutions',
    dropdownItems: [
      { name: 'USSD Access', path: '/ussd-access' },
      { name: 'Mobile Application', path: '/mobile-application' },
      { name: 'IoT Bin Sensors', path: '/iot-bin-sensors' },
      { name: 'Monitoring Platform', path: '/monitoring-platform' },
    ]
  },
  { name: 'Sectors', path: '/sectors' },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <img src={bintraqLogo} alt="Bintraq" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.dropdownItems ? (
                  <>
                    <Link
                      to={link.path}
                      className={`text-sm font-semibold transition-colors relative flex items-center gap-1 ${
                        location.pathname === link.path || link.dropdownItems.some(item => location.pathname === item.path)
                          ? 'text-primary'
                          : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                          location.pathname === link.path || link.dropdownItems.some(item => location.pathname === item.path)
                            ? 'w-full' 
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                    
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl py-4 z-50 opacity-0 invisible translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
                      <div className="px-4 pb-2 mb-2 border-b border-slate-100 dark:border-white/10">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          {link.name}
                        </div>
                      </div>
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2 text-sm font-medium transition-colors ${
                            location.pathname === item.path
                              ? 'text-primary bg-green-50 dark:bg-green-900/20'
                              : 'text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-white/5'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-semibold transition-colors relative group ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                        location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:flex items-center justify-center h-11 px-6 rounded-full border-2 border-slate-900 dark:border-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-slate-900 dark:text-white text-sm font-bold transition-all"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-slate-100 dark:border-white/5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.name === 'Solutions' ? (
                    <>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-lg font-semibold py-2 transition-colors text-slate-600 dark:text-slate-300 hover:text-primary flex items-center justify-between w-full"
                      >
                        Solutions
                        <span className="material-symbols-outlined text-[20px]">
                          {dropdownOpen ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                      {dropdownOpen && (
                        <div className="pl-4 mt-2 flex flex-col gap-2">
                          {navLinks.find(l => l.name === 'Solutions')?.dropdownItems?.map((sublink) => (
                            <Link
                              key={sublink.path}
                              to={sublink.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-semibold py-2 transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center h-12 px-6 rounded-full bg-slate-900 dark:bg-primary text-white text-sm font-bold transition-all"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

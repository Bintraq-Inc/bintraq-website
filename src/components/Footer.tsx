import { Link } from 'react-router-dom'
import bintraqLogo from '@/assets/bintraq-logo.png'

const footerLinks = {
  company: [
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ],
  solutions: [
    { name: 'USSD Services', path: '/ussd-access' },
    { name: 'Mobile App', path: '/mobile-application' },
    { name: 'IoT Sensors', path: '/iot-bin-sensors' },
    { name: 'Monitoring', path: '/monitoring-platform' },
  ],
  sectors: [
    { name: 'Households', path: '/sectors' },
    { name: 'Businesses', path: '/sectors' },
    { name: 'Institutions', path: '/sectors' },
    { name: 'Events', path: '/sectors' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/' },
    { name: 'Terms of Service', path: '/' },
  ],
}

const socialLinks = [
  { icon: 'language', href: '#', label: 'Website' },
  { icon: 'mail', href: 'mailto:dhieumajok211@gmail.com', label: 'Email' },
  { icon: 'code', href: 'https://github.com/Bintraq-Inc/bintraq-website', label: 'GitHub' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={bintraqLogo} alt="Bintraq" className="h-8 w-auto" />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Delivering high-quality, robust waste management solutions for cleaner, healthier communities in South Sudan.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Links - Hidden on smaller screens */}
          <div className="hidden lg:block">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Sectors</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              {footerLinks.sectors.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-end items-center gap-6">
          <p className="text-sm text-slate-400">
            © {currentYear} Bintraq Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

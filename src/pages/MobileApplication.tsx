import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Real-time Tracking',
    description: 'Track your waste collection requests and vehicle location in real-time.',
    icon: 'location_on',
  },
  {
    title: 'Smart Notifications',
    description: 'Receive push notifications about collection schedules and updates.',
    icon: 'notifications',
  },
  {
    title: 'Digital Payments',
    description: 'Pay for services securely through mobile money and digital wallets.',
    icon: 'payment',
  },
  {
    title: 'Service History',
    description: 'View complete history of all your waste management transactions.',
    icon: 'history',
  },
  {
    title: 'Environmental Impact',
    description: 'Track your contribution to environmental sustainability.',
    icon: 'eco',
  },
  {
    title: 'Multi-language',
    description: 'Available in Arabic, English, and local South Sudanese languages.',
    icon: 'translate',
  },
]

const appScreens = [
  {
    title: 'Home Dashboard',
    description: 'Quick access to all services and real-time status updates.',
    features: ['Service overview', 'Quick actions', 'Recent activity'],
  },
  {
    title: 'Request Service',
    description: 'Schedule pickups with just a few taps.',
    features: ['Location selection', 'Service types', 'Scheduling options'],
  },
  {
    title: 'Track & Monitor',
    description: 'Follow your requests from submission to completion.',
    features: ['Live tracking', 'Status updates', 'ETA notifications'],
  },
  {
    title: 'Payments & History',
    description: 'Manage payments and view transaction history.',
    features: ['Payment methods', 'Transaction history', 'Digital receipts'],
  },
]

const downloadStats = [
  { value: '5k+', label: 'Downloads' },
  { value: '4.8★', label: 'App Rating' },
  { value: '99%', label: 'Uptime' },
]

export default function MobileApplication() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-8">
                <span className="material-symbols-outlined text-lg">smartphone</span>
                Smart Technology
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
                Mobile{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Application
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Experience the future of waste management with our feature-rich mobile app. 
                Real-time tracking, smart notifications, and seamless payment integration.
              </p>

              <div className="flex flex-wrap gap-5 mb-8">
                <button className="h-16 px-10 rounded-2xl bg-slate-900 dark:bg-primary text-white text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group">
                  <span className="material-symbols-outlined text-2xl">download</span>
                  Download App
                </button>
                <Link
                  to="/ussd-access"
                  className="h-16 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold transition-all hover:border-slate-900 dark:hover:border-white flex items-center gap-3"
                >
                  Try USSD Instead
                  <span className="material-symbols-outlined">phone_android</span>
                </Link>
              </div>

              <div className="flex gap-8">
                {downloadStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* App Mockup */}
            <div className="relative">
              <div className="relative mx-auto">
                <img 
                  src="/Mobile Applicaton.svg" 
                  alt="Mobile Application - Comprehensive waste management app" 
                  className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl animate-float"
                />
                
                {/* Floating app features */}
                <div className="absolute -top-4 -right-8 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ backgroundColor: '#12a342', animationDelay: '1s' }}>
                  <span className="material-symbols-outlined text-xl">notifications</span>
                </div>
                
                <div className="absolute bottom-8 -left-8 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ backgroundColor: '#12a342', animationDelay: '2s' }}>
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                
                <div className="absolute top-1/2 -right-12 text-white p-2 rounded-full shadow-lg animate-pulse" style={{ backgroundColor: '#12a342' }}>
                  <span className="material-symbols-outlined">payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">App Features</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need for efficient waste management, designed with user experience in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background-light dark:bg-background-dark p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screens Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">App Interface</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Intuitive design that makes waste management simple and efficient for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appScreens.map((screen, index) => (
              <div
                key={screen.title}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center mb-6 text-xl font-bold">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{screen.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{screen.description}</p>
                
                <ul className="space-y-2">
                  {screen.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Integration Section */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
                Secure{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Payments
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Integrated with popular South Sudanese mobile money services and digital wallets 
                for seamless, secure transactions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400">payment</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mobile Money Integration</div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">MTN, Airtel, and Zain mobile money</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">account_balance_wallet</span>
                  </div>
                  <div>
                    <div className="font-semibold">Digital Wallets</div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">Secure digital wallet integration</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-purple-600 dark:text-purple-400">security</span>
                  </div>
                  <div>
                    <div className="font-semibold">Bank-level Security</div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">End-to-end encryption and secure protocols</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/30 rounded-3xl p-12">
                <div className="text-6xl font-black text-blue-600 dark:text-blue-400 mb-4">₹0</div>
                <div className="text-xl font-semibold mb-2">Transaction Fees</div>
                <div className="text-slate-600 dark:text-slate-400">
                  No hidden charges or transaction fees for payments
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#143E3f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Download the App Today
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of users already managing their waste efficiently with our mobile app. 
            Available for Android devices.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <button className="h-16 px-10 rounded-2xl bg-white text-blue-600 text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl">download</span>
              Download Now
            </button>
            <Link
              to="/ussd-access"
              className="h-16 px-8 rounded-2xl border-2 border-white/30 text-white font-semibold transition-all hover:border-white hover:bg-white/10 flex items-center gap-3"
            >
              Use USSD Instead
              <span className="material-symbols-outlined">phone_android</span>
            </Link>
          </div>
          <div className="mt-8 text-sm opacity-75">
            Coming soon on iOS • Available now on Android
          </div>
        </div>
      </section>
    </>
  )
}
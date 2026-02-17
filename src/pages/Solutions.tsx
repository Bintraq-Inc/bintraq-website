import { Link } from 'react-router-dom'

const solutions = [
  {
    icon: 'phone_android',
    title: 'USSD Services',
    description:
      'Access waste management services without internet. Perfect for areas with limited connectivity.',
    features: [
      'Request pickup services',
      'Check collection schedules',
      'Report issues instantly',
      'Receive SMS confirmations',
    ],
    color: 'green',
  },
  {
    icon: 'smartphone',
    title: 'Mobile Application',
    description:
      'Full-featured app for smartphones with real-time tracking and notifications.',
    features: [
      'Real-time truck tracking',
      'Push notifications',
      'Service history',
      'Digital payments',
    ],
    color: 'blue',
  },
  {
    icon: 'sensors',
    title: 'IoT Bin Sensors',
    description:
      'Smart sensors that monitor bin fill levels and optimize collection routes.',
    features: [
      'Fill level monitoring',
      'Route optimization',
      'Overflow prevention',
      'Predictive analytics',
    ],
    color: 'purple',
  },
  {
    icon: 'monitoring',
    title: 'Monitoring Platform',
    description:
      'Centralized dashboard for operators to manage all aspects of waste collection.',
    features: [
      'Real-time analytics',
      'Fleet management',
      'Performance reports',
      'Environmental impact tracking',
    ],
    color: 'orange',
  },
]

const processSteps = [
  {
    number: 1,
    icon: 'delete_sweep',
    title: 'Request Service',
    description: 'Users request pickup via USSD, mobile app, or our monitoring platform.',
  },
  {
    number: 2,
    icon: 'local_shipping',
    title: 'Smart Routing',
    description: 'AI optimizes collection routes based on sensor data and requests.',
  },
  {
    number: 3,
    icon: 'check_circle',
    title: 'Collection & Tracking',
    description: 'Real-time tracking and confirmation when waste is collected.',
  },
]

const colorClasses = {
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400',
    border: 'hover:border-green-200 dark:hover:border-green-800',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'hover:border-blue-200 dark:hover:border-blue-800',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'hover:border-purple-200 dark:hover:border-purple-800',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'hover:border-orange-200 dark:hover:border-orange-800',
  },
}

export default function Solutions() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-green-200/30 dark:bg-green-900/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-8">
                <span className="material-symbols-outlined text-lg">bolt</span>
                Integrated Technology Stack
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                  Solutions
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                A comprehensive suite of technologies designed to work together, 
                creating an efficient and transparent waste management ecosystem.
              </p>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <img 
                src="/Online world-amico.svg" 
                alt="Connected Technology Solutions" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-xl animate-float"
              />
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-8 bg-blue-500 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-xl">smartphone</span>
              </div>
              
              <div className="absolute bottom-8 -left-8 bg-green-500 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                <span className="material-symbols-outlined text-xl">sensors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solution - Mobile App */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold mb-6">
                <span className="material-symbols-outlined text-lg">star</span>
                Featured Solution
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
                Mobile Payment Integration
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Seamless mobile payment solutions that make waste management services accessible to everyone, 
                including users without traditional banking access.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">check</span>
                  </div>
                  <span className="font-medium">Digital Wallets</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">check</span>
                  </div>
                  <span className="font-medium">USSD Payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">check</span>
                  </div>
                  <span className="font-medium">Real-time Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">check</span>
                  </div>
                  <span className="font-medium">Secure Transactions</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/undraw_mobile-payments_uate.svg" 
                alt="Mobile Payment Solutions" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const colors = colorClasses[solution.color as keyof typeof colorClasses]
              return (
                <div
                  key={solution.title}
                  className={`bg-background-light dark:bg-background-dark p-10 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-xl transition-all duration-300 ${colors.border}`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-8`}>
                    <span className="material-symbols-outlined text-3xl">{solution.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">How It Works</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our integrated platform ensures seamless waste collection from request to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-surface-dark border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-lg mb-8 relative transition-transform group-hover:scale-110 duration-300">
                  <span className="material-symbols-outlined text-4xl text-slate-700 dark:text-slate-300">
                    {step.icon}
                  </span>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 dark:bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connecting Line */}
          <svg
            className="hidden md:block absolute top-[280px] left-1/2 -translate-x-1/2 w-2/3 h-24 z-0 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 800 100"
          >
            <path
              d="M0 50 Q 200 80 400 50 T 800 50"
              fill="none"
              stroke="currentColor"
              strokeDasharray="10 10"
              strokeWidth="3"
              className="text-slate-200 dark:text-slate-700"
            />
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Ready to Implement Our Solutions?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact our team to discuss how Bintraq can transform waste management 
            in your area.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-16 px-10 rounded-2xl bg-primary text-white text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 items-center gap-3 group"
          >
            <span>Contact Us</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}

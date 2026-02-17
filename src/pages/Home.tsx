import { Link } from 'react-router-dom'

const features = [
  {
    icon: 'phone_android',
    title: 'USSD Access',
    description: 'Waste service access for users without internet connectivity, ensuring inclusivity.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile Application',
    description: 'Request pickups, track services, and receive real-time notifications on the go.',
  },
  {
    icon: 'sensors',
    title: 'IoT Bin Sensors',
    description: 'Smart sensors monitor fill levels to optimize collection routes and prevent overflow.',
  },
  {
    icon: 'monitoring',
    title: 'Monitoring Platform',
    description: 'Real-time insights, analytics, and accountability for operators and stakeholders.',
  },
]

const stats = [
  { value: '50k+', label: 'Tons Processed' },
  { value: '200+', label: 'Active Locations' },
  { value: '99.9%', label: 'System Uptime' },
]

const sectors = [
  { 
    name: 'Households', 
    image: "/Households.svg" 
  },
  { 
    name: 'Businesses', 
    image: "/Businesses.svg" 
  },
  { 
    name: 'Institutions', 
    image: "/Institutions.svg" 
  },
  { 
    name: 'Markets', 
    image: "/Markets.svg" 
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/30 dark:bg-green-900/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-dashed border-slate-200 dark:border-slate-800 rounded-full -z-20 animate-spin-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text Column */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Sustainable Waste Management
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
                Clean Cities,{' '}
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                  Smart Future.
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
                Bintraq combines USSD, mobile apps, IoT sensors, and monitoring platforms 
                to deliver efficient, transparent waste management for South Sudan.
              </p>

              <div className="flex flex-wrap gap-5 items-center">
                <Link
                  to="/solutions"
                  className="h-16 px-10 rounded-2xl bg-slate-900 dark:bg-primary text-white text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group relative overflow-hidden border-b-4 border-slate-950 dark:border-green-800 active:border-b-0 active:translate-y-1"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">Explore Solutions</span>
                  <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  to="/sectors"
                  className="h-14 px-8 rounded-2xl text-slate-600 dark:text-slate-300 font-semibold hover:text-slate-900 dark:hover:text-white transition-all hover:bg-slate-100 dark:hover:bg-white/5 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined">category</span>
                  View Sectors
                </Link>
              </div>
            </div>

            {/* Hero Image / Illustration */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Main Hero Illustration */}
                <div className="relative">
                  <img 
                    src="/Waste management-pana.svg" 
                    alt="Waste Management Solutions" 
                    className="w-full h-auto max-w-lg mx-auto drop-shadow-xl animate-float"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-8 bg-primary text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                    <span className="material-symbols-outlined text-2xl">verified</span>
                  </div>
                  
                  <div className="absolute bottom-8 -left-8 bg-blue-500 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                    <span className="material-symbols-outlined text-2xl">sensors</span>
                  </div>
                  
                  <div className="absolute top-1/2 -right-12 bg-purple-500 text-white p-2 rounded-full shadow-lg animate-pulse">
                    <span className="material-symbols-outlined">smartphone</span>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-surface-dark rounded-2xl shadow-lg p-4 border border-slate-100 dark:border-white/10 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Collection Complete</div>
                      <div className="text-xs text-slate-500">Zone A - 12 bins</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-surface-dark rounded-2xl shadow-lg p-4 border border-slate-100 dark:border-white/10 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-500">sensors</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Sensor Alert</div>
                      <div className="text-xs text-slate-500">Bin #47 at 85%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">What We Do</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our integrated platform combines multiple technologies to create a seamless 
              waste management ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background-light dark:bg-background-dark p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 dark:bg-white/5 rounded-bl-[3rem] -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-500" />
                
                <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 text-primary flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 relative z-10 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-6xl font-black mb-4 tracking-tighter text-primary">
                  {stat.value}
                </div>
                <div className="text-xl font-medium text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 font-display">Sectors We Serve</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl">
                Customized waste management solutions for every sector of the community.
              </p>
            </div>
            <Link
              to="/sectors"
              className="flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
            >
              View all sectors
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="w-0 h-1 bg-primary mb-4 group-hover:w-10 transition-all duration-500" />
                  <h3 className="text-2xl font-bold text-white">{sector.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Why Choose Bintraq?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our platform delivers exceptional value through cutting-edge technology and reliable service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                <img 
                  src="/Fast Respond.svg" 
                  alt="Fast Response" 
                  className="w-24 h-24 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Response</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Quick turnaround times with optimized routing and real-time tracking.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                <img 
                  src="/Reliability.svg" 
                  alt="Reliability" 
                  className="w-24 h-24 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliable Service</h3>
              <p className="text-slate-600 dark:text-slate-400">
                99.9% service uptime with backup systems and dedicated support.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                <img 
                  src="/24 7 suport.svg" 
                  alt="24/7 Support" 
                  className="w-24 h-24 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Round-the-clock customer service via phone, SMS, and app.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                <img 
                  src="/Sustainability.svg" 
                  alt="Sustainability" 
                  className="w-24 h-24 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Environmental focus with recycling programs and carbon tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="material-symbols-outlined text-6xl text-primary mb-6">eco</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Ready to Transform Your Waste Management?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of organizations already using Bintraq to create cleaner, 
            healthier communities in South Sudan.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="h-16 px-10 rounded-2xl bg-primary text-white text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group"
            >
              <span>Get Started Today</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <Link
              to="/solutions"
              className="h-16 px-10 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-lg font-bold transition-all hover:border-slate-900 dark:hover:border-white flex items-center gap-3"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

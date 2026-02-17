import { Link } from 'react-router-dom'

const sectors = [
  {
    name: 'Households',
    description: 'Regular collection services to keep homes clean and healthy.',
    image: '/Households.svg',
    features: ['Weekly pickups', 'Recycling programs', 'Bulk waste removal'],
  },
  {
    name: 'Businesses',
    description: 'Customized solutions for shops, offices, and corporate facilities.',
    image: '/Businesses.svg',
    features: ['Flexible scheduling', 'Compliance reporting', 'Cost optimization'],
  },
  {
    name: 'Institutions',
    description: 'Secure and compliant services for schools, hospitals, and government buildings.',
    image: '/Institutions.svg',
    features: ['Medical waste handling', 'Secure disposal', 'Audit trails'],
  },
  {
    name: 'Markets',
    description: 'Fast, frequent servicing for busy commercial centers and marketplaces.',
    image: '/Markets.svg',
    features: ['Multiple daily pickups', 'Organic waste processing', 'Vendor coordination'],
  },
  {
    name: 'Events',
    description: 'On-demand waste management for festivals, conferences, and public gatherings.',
    image: '/Events.svg',
    features: ['Temporary bin setup', 'Real-time monitoring', 'Post-event cleanup'],
  },
  {
    name: 'Industrial',
    description: 'Comprehensive programs for factories and production sites.',
    image: '/Hazardous waste-cuate.svg',
    features: ['Hazardous waste', 'Large-scale operations', 'Environmental compliance'],
  },
]

const benefits = [
  {
    icon: '/Fast Respond.svg',
    title: 'Fast Response',
    description: 'Quick turnaround times with optimized routing and real-time tracking.',
  },
  {
    icon: '/Reliability.svg',
    title: 'Reliability',  
    description: '99.9% service uptime with backup systems and dedicated support.',
  },
  {
    icon: '/Sustainability.svg',
    title: 'Sustainability',
    description: 'Environmental focus with recycling programs and carbon tracking.',
  },
  {
    icon: '/24 7 suport.svg',
    title: '24/7 Support',
    description: 'Round-the-clock customer service via phone, SMS, and app.',
  },
]

export default function Sectors() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/30 dark:bg-green-900/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-semibold mb-8">
              <span className="material-symbols-outlined text-lg">category</span>
              Tailored Solutions
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
              Sectors{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                We Serve
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              From households to industrial facilities, we provide customized waste management 
              solutions for every sector of the community.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-8 flex flex-col justify-end">
                  <div className="w-0 h-1 bg-primary mb-4 group-hover:w-12 transition-all duration-500" />
                  <h3 className="text-2xl font-bold text-white mb-2">{sector.name}</h3>
                  <p className="text-white/80 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {sector.description}
                  </p>
                  <ul className="space-y-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {sector.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/90">
                        <span className="material-symbols-outlined text-primary text-sm">check</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sticky Sidebar */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-4xl font-black mb-6 font-display">Why Choose Bintraq?</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                  We deliver reliable, efficient, and environmentally responsible 
                  waste management solutions tailored to your sector's unique needs.
                </p>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-3 group w-fit"
                >
                  Get a Quote
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-8 rounded-[2rem] bg-white dark:bg-surface-dark border border-slate-100 dark:border-white/5 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 p-2">
                    <img 
                      src={benefit.icon} 
                      alt={benefit.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Find the Right Solution for Your Sector
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Our team will help you design a customized waste management program 
            that meets your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-16 px-10 rounded-2xl bg-primary text-white text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 items-center gap-3 group"
          >
            <span>Contact Our Team</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Innovation',
    description: 'Pioneering cutting-edge technology solutions for waste management challenges.',
    icon: 'lightbulb',
  },
  {
    title: 'Sustainability',
    description: 'Building eco-friendly systems that protect our environment for future generations.',
    icon: 'eco',
  },
  {
    title: 'Accessibility',
    description: 'Ensuring our solutions work for everyone, regardless of technology access.',
    icon: 'accessibility',
  },
  {
    title: 'Transparency',
    description: 'Providing clear visibility into all aspects of waste management operations.',
    icon: 'visibility',
  },
]

const team = [
  {
    name: 'Engineering Team',
    description: 'Expert developers and engineers building robust, scalable solutions.',
    icon: 'engineering',
  },
  {
    name: 'Operations Team',
    description: 'Field experts ensuring seamless deployment and operations.',
    icon: 'settings',
  },
  {
    name: 'Customer Success',
    description: 'Dedicated team ensuring customer satisfaction and support.',
    icon: 'support_agent',
  },
]

const impact = [
  {
    metric: '50,000+',
    label: 'Tons of Waste Processed',
    description: 'Diverted from landfills and processed responsibly',
  },
  {
    metric: '200+',
    label: 'Active Locations',
    description: 'Across South Sudan serving communities',
  },
  {
    metric: '99.9%',
    label: 'System Reliability',
    description: 'Consistent uptime for critical services',
  },
  {
    metric: '40%',
    label: 'Cost Reduction',
    description: 'Average operational cost savings for clients',
  },
]

const timeline = [
  {
    year: '2023',
    title: 'Foundation',
    description: 'Bintraq was founded with a vision to revolutionize waste management in South Sudan.',
  },
  {
    year: '2024',
    title: 'Technology Development',
    description: 'Developed our comprehensive platform integrating USSD, mobile apps, and IoT sensors.',
  },
  {
    year: '2024',
    title: 'Pilot Deployment',
    description: 'Successfully deployed pilot programs in key locations across South Sudan.',
  },
  {
    year: '2025',
    title: 'Scale & Growth',
    description: 'Expanding operations and continuing to innovate for cleaner communities.',
  },
]

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/30 dark:bg-green-900/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold mb-8">
                <span className="material-symbols-outlined text-lg">info</span>
                Our Story
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                  Bintraq
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Bintraq is a smart waste management platform focused on building innovative solutions 
                for efficient waste collection and environmental sustainability in South Sudan.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/solutions"
                  className="h-16 px-10 rounded-2xl bg-slate-900 dark:bg-primary text-white text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group"
                >
                  <span>Our Solutions</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="h-16 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold transition-all hover:border-slate-900 dark:hover:border-white flex items-center gap-3"
                >
                  Get in Touch
                  <span className="material-symbols-outlined">mail</span>
                </Link>
              </div>
            </div>

            {/* About Illustration */}
            <div className="relative">
              <img 
                src="/about-us.svg" 
                alt="About Bintraq - Team collaboration and environmental sustainability" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-xl animate-float"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-8 bg-primary text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-xl">eco</span>
              </div>
              
              <div className="absolute bottom-8 -left-8 bg-blue-500 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                <span className="material-symbols-outlined text-xl">lightbulb</span>
              </div>
              
              <div className="absolute top-1/2 -right-12 bg-purple-500 text-white p-2 rounded-full shadow-lg animate-pulse">
                <span className="material-symbols-outlined">recycling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 font-display">Our Mission</h2>
            <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
              Bintraq is a green technology project that combines USSD, a mobile application, 
              IoT-enabled bin sensors, and a centralized monitoring platform to improve waste 
              management efficiency, transparency, and environmental accountability.
            </p>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/30 rounded-3xl p-8">
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                The platform helps households and businesses manage waste responsibly while 
                supporting cleaner, healthier, and more sustainable communities in South Sudan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Our Values</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              The principles that guide our mission to create sustainable waste management solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-surface-dark p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 text-primary flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-2xl">{value.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Our Impact</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Measurable results from our commitment to sustainable waste management in South Sudan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item) => (
              <div
                key={item.label}
                className="text-center p-8 bg-background-light dark:bg-background-dark rounded-2xl border border-slate-100 dark:border-white/5"
              >
                <div className="text-5xl font-black text-primary mb-4">{item.metric}</div>
                <div className="text-xl font-bold mb-3">{item.label}</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Approach */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
                Technology for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                  Everyone
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our platform is built with React 19, TypeScript, Vite 7, and Tailwind CSS 4, 
                ensuring modern, reliable, and scalable solutions that work across all devices and connectivity levels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400">phone_android</span>
                  </div>
                  <div>
                    <div className="font-semibold">Universal Access</div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                      USSD technology ensures access even without smartphones or internet
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">sensors</span>
                  </div>
                  <div>
                    <div className="font-semibold">Smart Infrastructure</div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                      IoT sensors provide real-time data for optimized operations
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-purple-600 dark:text-purple-400">monitoring</span>
                  </div>
                  <div>
                    <div className="font-semibold">Centralized Platform</div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                      Unified dashboard for complete operational oversight
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <img 
                src="/Online world-cuate.svg" 
                alt="Connected Technology" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Our Journey</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From vision to reality - building the future of waste management in South Sudan.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-primary"></div>

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={event.year} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}>
                  {/* Timeline marker */}
                  <div className="absolute left-8 md:left-1/2 md:-ml-4 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-surface-dark z-10"></div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-soft">
                      <div className="text-2xl font-black text-primary mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Our Team</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Dedicated professionals working to make waste management more efficient and sustainable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-2xl">{member.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#143E3f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Join Our Mission
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Be part of the solution. Help us create cleaner, healthier, and more sustainable 
            communities across South Sudan.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/careers"
              className="h-16 px-10 rounded-2xl bg-white text-primary text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
            >
              Join Our Team
              <span className="material-symbols-outlined">group_add</span>
            </Link>
            <Link
              to="/contact"
              className="h-16 px-8 rounded-2xl border-2 border-white/30 text-white font-semibold transition-all hover:border-white hover:bg-white/10 flex items-center gap-3"
            >
              Partner With Us
              <span className="material-symbols-outlined">handshake</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
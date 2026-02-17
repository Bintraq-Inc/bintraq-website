import { Link } from 'react-router-dom'

const sensorFeatures = [
  {
    title: 'Fill Level Monitoring',
    description: 'Real-time monitoring of waste bin fill levels using ultrasonic sensors.',
    icon: 'straighten',
  },
  {
    title: 'Smart Alerts',
    description: 'Automated alerts when bins reach 80% capacity to prevent overflow.',
    icon: 'warning',
  },
  {
    title: 'Route Optimization',
    description: 'AI-powered route planning based on real-time sensor data.',
    icon: 'route',
  },
  {
    title: 'Environmental Monitoring',
    description: 'Temperature and humidity sensors for waste quality monitoring.',
    icon: 'thermostat',
  },
  {
    title: 'Tamper Detection',
    description: 'Security sensors to detect unauthorized access or damage.',
    icon: 'security',
  },
  {
    title: 'Long Battery Life',
    description: 'Solar-powered sensors with battery backup for continuous operation.',
    icon: 'battery_charging_full',
  },
]

const specifications = [
  {
    category: 'Sensors',
    specs: [
      'Ultrasonic fill level sensor (0-100%)',
      'Temperature sensor (-20°C to +60°C)',
      'Humidity sensor (0-100% RH)',
      'Accelerometer for tamper detection',
    ],
  },
  {
    category: 'Connectivity',
    specs: [
      'LoRaWAN long-range communication',
      'GSM/2G fallback connectivity',
      'Bluetooth for maintenance access',
      'Wi-Fi connectivity option',
    ],
  },
  {
    category: 'Power & Durability',
    specs: [
      'Solar panel with battery backup',
      'IP67 weatherproof rating',
      '5+ year operational lifespan',
      '24/7 continuous monitoring',
    ],
  },
]

const benefits = [
  {
    title: 'Reduce Collection Costs',
    description: 'Optimize routes and reduce unnecessary trips by up to 40%.',
    icon: 'savings',
    stat: '40%',
    statLabel: 'Cost Reduction',
  },
  {
    title: 'Prevent Overflow',
    description: 'Early warnings prevent bins from overflowing and creating health hazards.',
    icon: 'health_and_safety',
    stat: '95%',
    statLabel: 'Overflow Prevention',
  },
  {
    title: 'Improve Efficiency',
    description: 'Data-driven insights help optimize collection schedules and routes.',
    icon: 'trending_up',
    stat: '60%',
    statLabel: 'Efficiency Gain',
  },
  {
    title: 'Environmental Impact',
    description: 'Reduce carbon footprint through optimized collection routes.',
    icon: 'eco',
    stat: '30%',
    statLabel: 'Emission Reduction',
  },
]

const installationSteps = [
  {
    step: 1,
    title: 'Site Assessment',
    description: 'Our team evaluates bin locations and connectivity requirements.',
    icon: 'location_searching',
  },
  {
    step: 2,
    title: 'Sensor Installation',
    description: 'Professional installation of IoT sensors with minimal disruption.',
    icon: 'build',
  },
  {
    step: 3,
    title: 'System Integration',
    description: 'Connect sensors to our monitoring platform and configure alerts.',
    icon: 'settings',
  },
  {
    step: 4,
    title: 'Training & Support',
    description: 'Staff training and ongoing technical support for optimal performance.',
    icon: 'support_agent',
  },
]

export default function IotBinSensors() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-semibold mb-8">
                <span className="material-symbols-outlined text-lg">sensors</span>
                Smart Infrastructure
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
                IoT Bin{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Sensors
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Revolutionary smart sensors that monitor waste bin levels in real-time, 
                optimizing collection routes and preventing overflow situations.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/contact"
                  className="h-16 px-10 rounded-2xl bg-slate-900 dark:bg-primary text-white text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group"
                >
                  <span>Request Installation</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                  to="/monitoring-platform"
                  className="h-16 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold transition-all hover:border-slate-900 dark:hover:border-white flex items-center gap-3"
                >
                  View Dashboard
                  <span className="material-symbols-outlined">monitoring</span>
                </Link>
              </div>
            </div>

            {/* IoT Visualization */}
            <div className="relative">
              <img 
                src="/IoT Bin Sensor.svg" 
                alt="IoT Bin Sensors - Smart waste monitoring technology" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-xl animate-float"
              />
              
              {/* Floating IoT Icons */}
              <div className="absolute -top-4 -right-8 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ backgroundColor: '#12a342', animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-xl">wifi</span>
              </div>
              
              <div className="absolute bottom-8 -left-8 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ backgroundColor: '#12a342', animationDelay: '2s' }}>
                <span className="material-symbols-outlined text-xl">battery_charging_full</span>
              </div>
              
              <div className="absolute top-1/2 -right-12 text-white p-2 rounded-full shadow-lg animate-pulse" style={{ backgroundColor: '#12a342' }}>
                <span className="material-symbols-outlined">settings_remote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Sensor Features</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Advanced IoT technology designed for harsh outdoor environments with reliable, 
              long-term operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sensorFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-background-light dark:bg-background-dark p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
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

      {/* Benefits Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Proven Benefits</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real-world impact and measurable improvements from IoT sensor deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
                </div>
                
                <div className="text-4xl font-black text-primary mb-2">{benefit.stat}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">{benefit.statLabel}</div>
                
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Technical Specifications</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade sensors built for reliability and performance in any environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {specifications.map((spec) => (
              <div
                key={spec.category}
                className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5"
              >
                <h3 className="text-2xl font-bold mb-6">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.specs.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Installation Process</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Simple, professional installation with minimal disruption to your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center mx-auto shadow-lg">
                    <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#143E3f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Ready to Go Smart?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Transform your waste management with IoT sensors. Get real-time insights, 
            reduce costs, and improve efficiency with our smart bin monitoring system.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="h-16 px-10 rounded-2xl bg-white text-purple-600 text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
            >
              Request Quote
              <span className="material-symbols-outlined">request_quote</span>
            </Link>
            <Link
              to="/monitoring-platform"
              className="h-16 px-8 rounded-2xl border-2 border-white/30 text-white font-semibold transition-all hover:border-white hover:bg-white/10 flex items-center gap-3"
            >
              View Platform
              <span className="material-symbols-outlined">monitoring</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
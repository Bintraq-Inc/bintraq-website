import { Link } from 'react-router-dom'

const dashboardFeatures = [
  {
    title: 'Real-time Analytics',
    description: 'Live data streams from all connected sensors and service requests.',
    icon: 'analytics',
  },
  {
    title: 'Fleet Management',
    description: 'Track and manage waste collection vehicles in real-time.',
    icon: 'local_shipping',
  },
  {
    title: 'Performance Reports',
    description: 'Detailed reporting on service efficiency and environmental impact.',
    icon: 'assessment',
  },
  {
    title: 'Route Optimization',
    description: 'AI-powered route planning for maximum efficiency.',
    icon: 'route',
  },
  {
    title: 'Alert Management',
    description: 'Automated alerts and notifications for critical events.',
    icon: 'notifications',
  },
  {
    title: 'User Management',
    description: 'Comprehensive user and customer management system.',
    icon: 'group',
  },
]

const kpis = [
  {
    title: 'Collection Efficiency',
    value: '94%',
    change: '+12%',
    trend: 'up',
    description: 'Average collection efficiency across all routes',
  },
  {
    title: 'Response Time',
    value: '2.3h',
    change: '-35%',
    trend: 'down',
    description: 'Average response time to service requests',
  },
  {
    title: 'Customer Satisfaction',
    value: '4.8/5',
    change: '+8%',
    trend: 'up',
    description: 'Customer satisfaction rating',
  },
  {
    title: 'Cost Reduction',
    value: '40%',
    change: '+15%',
    trend: 'up',
    description: 'Operational cost reduction from optimization',
  },
]

const modules = [
  {
    name: 'Operations Dashboard',
    description: 'Central command center for all waste management operations.',
    features: ['Real-time monitoring', 'Fleet tracking', 'Service requests', 'Performance metrics'],
    icon: 'dashboard',
  },
  {
    name: 'Analytics Engine',
    description: 'Advanced analytics and reporting for data-driven decisions.',
    features: ['Custom reports', 'Trend analysis', 'Predictive insights', 'Export capabilities'],
    icon: 'analytics',
  },
  {
    name: 'Route Optimizer',
    description: 'AI-powered route planning and optimization system.',
    features: ['Dynamic routing', 'Traffic integration', 'Fuel optimization', 'Time efficiency'],
    icon: 'route',
  },
  {
    name: 'Customer Portal',
    description: 'Self-service portal for customers and stakeholders.',
    features: ['Service history', 'Payment management', 'Support tickets', 'Feedback system'],
    icon: 'person',
  },
]

const integrations = [
  {
    name: 'IoT Sensors',
    description: 'Direct integration with smart bin sensors',
    icon: 'sensors',
  },
  {
    name: 'Mobile Apps',
    description: 'Seamless mobile application integration',
    icon: 'smartphone',
  },
  {
    name: 'USSD Gateway',
    description: 'USSD service integration for universal access',
    icon: 'phone_android',
  },
  {
    name: 'Payment Systems',
    description: 'Mobile money and digital wallet integration',
    icon: 'payment',
  },
  {
    name: 'GPS Tracking',
    description: 'Real-time vehicle and fleet tracking',
    icon: 'gps_fixed',
  },
  {
    name: 'Third-party APIs',
    description: 'External system and API integrations',
    icon: 'api',
  },
]

export default function MonitoringPlatform() {
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
                <span className="material-symbols-outlined text-lg">monitoring</span>
                Central Command
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
                Monitoring{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Platform
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Comprehensive command center that unifies all waste management operations 
                into a single, powerful dashboard with real-time insights and control.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/contact"
                  className="h-16 px-10 rounded-2xl bg-slate-900 dark:bg-primary text-white text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group"
                >
                  <span>Request Demo</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                  to="/iot-bin-sensors"
                  className="h-16 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold transition-all hover:border-slate-900 dark:hover:border-white flex items-center gap-3"
                >
                  View Sensors
                  <span className="material-symbols-outlined">sensors</span>
                </Link>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <img 
                src="/Monitoring Platfom.svg" 
                alt="Monitoring Platform - Real-time dashboard and analytics" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-xl animate-float"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-8 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ backgroundColor: '#12a342', animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-xl">analytics</span>
              </div>
              
              <div className="absolute bottom-8 -left-8 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ backgroundColor: '#12a342', animationDelay: '2s' }}>
                <span className="material-symbols-outlined text-xl">notifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Platform Features</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to monitor, manage, and optimize your waste management operations 
              from a single, unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature) => (
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

      {/* KPIs Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Real Performance Data</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Track key performance indicators that matter for efficient waste management operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi) => (
              <div
                key={kpi.title}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl font-black text-primary mb-2">{kpi.value}</div>
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium mb-4 ${
                  kpi.trend === 'up' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                }`}>
                  <span className="material-symbols-outlined text-sm">
                    {kpi.trend === 'up' ? 'trending_up' : 'trending_down'}
                  </span>
                  {kpi.change}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{kpi.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {kpi.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Platform Modules</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Modular architecture designed to scale with your operations and specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <div
                key={module.name}
                className="bg-background-light dark:bg-background-dark p-10 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">{module.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{module.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {module.description}
                </p>
                
                <ul className="space-y-2">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">System Integrations</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Seamless integration with all Bintraq services and external systems for unified operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-2xl">{integration.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{integration.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {integration.description}
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
            Experience the Platform
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            See how our monitoring platform can transform your waste management operations 
            with real-time insights and automated optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="h-16 px-10 rounded-2xl bg-white text-blue-600 text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
            >
              Schedule Demo
              <span className="material-symbols-outlined">play_circle</span>
            </Link>
            <Link
              to="/solutions"
              className="h-16 px-8 rounded-2xl border-2 border-white/30 text-white font-semibold transition-all hover:border-white hover:bg-white/10 flex items-center gap-3"
            >
              View All Solutions
              <span className="material-symbols-outlined">bolt</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
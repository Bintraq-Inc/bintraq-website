import { Link } from 'react-router-dom'

const features = [
  {
    title: 'No Internet Required',
    description: 'Access waste services even without smartphone or internet connectivity.',
    icon: 'signal_cellular_off',
  },
  {
    title: 'Simple Commands',
    description: 'Easy-to-remember USSD codes for all waste management functions.',
    icon: 'dialpad',
  },
  {
    title: 'SMS Confirmations',
    description: 'Receive instant SMS confirmations for all service requests.',
    icon: 'sms',
  },
  {
    title: 'Multi-language Support',
    description: 'Available in Arabic, English, and local South Sudanese languages.',
    icon: 'translate',
  },
]

const ussdCommands = [
  {
    code: '*5555*1#',
    name: 'Request Pickup',
    description: 'Schedule a waste collection for your location',
  },
  {
    code: '*5555*2#',  
    name: 'Check Schedule',
    description: 'View upcoming collection dates and times',
  },
  {
    code: '*5555*3#',
    name: 'Report Issue',
    description: 'Report overflowing bins or missed collections',
  },
  {
    code: '*5555*4#',
    name: 'Account Balance',
    description: 'Check your account balance and payment history',
  },
  {
    code: '*5555*5#',
    name: 'Help & Support',
    description: 'Get help and contact customer support',
  },
]

const benefits = [
  'Works on any mobile phone',
  '24/7 availability',
  'No app installation required',
  'Minimal data usage',
  'Reliable service delivery',
  'Instant confirmations',
]

export default function UssdAccess() {
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
                <span className="material-symbols-outlined text-lg">phone_android</span>
                Universal Access
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
                USSD{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                  Access
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Access comprehensive waste management services through simple USSD codes. 
                No internet connection or smartphone required - works on any mobile phone.
              </p>

              <div className="flex flex-wrap gap-5">
                <div className="bg-green-50 dark:bg-green-900/30 px-8 py-4 rounded-2xl">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">*5555#</div>
                  <div className="text-sm text-green-700 dark:text-green-300">Try it now</div>
                </div>
                <Link
                  to="/contact"
                  className="h-16 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold transition-all hover:border-slate-900 dark:hover:border-white flex items-center gap-3"
                >
                  Get Support
                  <span className="material-symbols-outlined">support_agent</span>
                </Link>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <img 
                src="/USSD services.svg" 
                alt="USSD Services Illustration" 
                className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-8 bg-primary text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-xl">sms</span>
              </div>
              
              <div className="absolute bottom-8 -left-8 bg-blue-500 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                <span className="material-symbols-outlined text-xl">signal_cellular_alt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Why Choose USSD?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              USSD technology ensures everyone can access waste management services, 
              regardless of their phone type or internet connectivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background-light dark:bg-background-dark p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 text-primary flex items-center justify-center mx-auto mb-6">
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

      {/* USSD Commands Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Available Commands</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Simple USSD codes to access all waste management functions from any mobile phone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ussdCommands.map((command) => (
              <div
                key={command.code}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all"
              >
                <div className="bg-slate-900 text-green-400 font-mono text-center py-3 px-4 rounded-xl mb-6">
                  <div className="text-lg font-bold">{command.code}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{command.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {command.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
                Universal
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                  {' '}Access
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our USSD service ensures that waste management is accessible to everyone in South Sudan, 
                bridging the digital divide with simple, reliable technology.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm">check</span>
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/30 rounded-3xl p-12">
                <div className="text-6xl font-black text-primary mb-4">98%</div>
                <div className="text-xl font-semibold mb-2">Mobile Penetration</div>
                <div className="text-slate-600 dark:text-slate-400">
                  in South Sudan supports basic phones that work with USSD
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
            Start Using USSD Today
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Simply dial *5555# from any mobile phone to access our comprehensive 
            waste management services. It's that simple.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <div className="bg-white/20 backdrop-blur-lg px-8 py-4 rounded-2xl">
              <div className="text-3xl font-bold font-mono">*5555#</div>
              <div className="text-sm opacity-80">Dial this code now</div>
            </div>
            <Link
              to="/contact"
              className="h-16 px-10 rounded-2xl bg-white text-primary text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
            >
              Get Help
              <span className="material-symbols-outlined">support_agent</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
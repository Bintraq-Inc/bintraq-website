import { Link } from 'react-router-dom'

const benefits = [
  {
    title: 'Competitive Salary',
    description: 'Market-competitive compensation packages with performance bonuses.',
    icon: 'payments',
  },
  {
    title: 'Remote Work',
    description: 'Flexible remote work options for most positions.',
    icon: 'laptop_mac',
  },
  {
    title: 'Professional Growth',
    description: 'Continuous learning opportunities and career development support.',
    icon: 'trending_up',
  },
  {
    title: 'Health Insurance',
    description: 'Comprehensive health insurance coverage for you and your family.',
    icon: 'health_and_safety',
  },
  {
    title: 'Innovation Time',
    description: '20% time for personal projects and innovation initiatives.',
    icon: 'lightbulb',
  },
  {
    title: 'Environmental Impact',
    description: 'Work on meaningful projects that create positive environmental change.',
    icon: 'eco',
  },
]

const culture = [
  {
    title: 'Innovation-Driven',
    description: 'We embrace new ideas and encourage creative problem-solving approaches.',
    icon: 'auto_awesome',
  },
  {
    title: 'Collaborative',
    description: 'Cross-functional teams working together towards common goals.',
    icon: 'group',
  },
  {
    title: 'Mission-Focused',
    description: 'Every team member is aligned with our environmental sustainability mission.',
    icon: 'flag',
  },
  {
    title: 'Inclusive',
    description: 'Diverse, welcoming environment where everyone can contribute and grow.',
    icon: 'diversity_3',
  },
]

export default function Careers() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-semibold mb-8">
                <span className="material-symbols-outlined text-lg">work</span>
                Join Our Mission
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
                Build the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Future
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Join our team of passionate innovators working to create sustainable waste management 
                solutions that transform communities across South Sudan.
              </p>

              <div className="flex flex-wrap gap-5">
                <a 
                  href="#open-positions"
                  className="h-16 px-10 rounded-2xl bg-slate-900 dark:bg-primary text-white text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 group"
                >
                  <span>View Open Positions</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <Link
                  to="/about"
                  className="h-16 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold transition-all hover:border-slate-900 dark:hover:border-white flex items-center gap-3"
                >
                  Learn About Us
                  <span className="material-symbols-outlined">info</span>
                </Link>
              </div>
            </div>

            {/* Career Illustration */}
            <div className="relative">
              <img 
                src="/Careers.svg" 
                alt="Careers at Bintraq - Join our team" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-xl animate-float"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-8 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ backgroundColor: '#12a342', animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-xl">work</span>
              </div>
              
              <div className="absolute bottom-8 -left-8 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ backgroundColor: '#12a342', animationDelay: '2s' }}>
                <span className="material-symbols-outlined text-xl">lightbulb</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Our Culture</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We believe that great technology comes from great teams. Here's what makes Bintraq special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item) => (
              <div
                key={item.title}
                className="bg-background-light dark:bg-background-dark p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Why Work With Us</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Competitive benefits package designed to support your growth and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section id="available-positions" className="py-24 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Current Opportunities</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
                <span className="material-symbols-outlined text-6xl text-purple-600 dark:text-purple-400 mb-4 block">work</span>
                <h3 className="text-2xl font-bold mb-4 text-purple-900 dark:text-purple-100">Stay Tuned for Opportunities</h3>
                <p className="text-purple-700 dark:text-purple-300 mb-6">
                  We're always growing and looking for talented individuals to join our mission. 
                  Keep checking our platform for available positions that match your skills and passion for environmental sustainability.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="mailto:dhieumajok211@gmail.com" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
                  >
                    <span className="material-symbols-outlined">email</span>
                    Get Notified
                  </a>
                  <a 
                    href="#culture" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
                  >
                    Learn More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Application Process</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our streamlined hiring process is designed to be fair, efficient, and give you the best opportunity to showcase your skills.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', description: 'Submit your application through our contact form or email.' },
              { step: '02', title: 'Review', description: 'Our team reviews your application within 3-5 business days.' },
              { step: '03', title: 'Interview', description: 'Video or in-person interview with the hiring team.' },
              { step: '04', title: 'Decision', description: 'Quick decision and onboarding for successful candidates.' },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#143E3f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Don't see the right position? We're always looking for talented individuals 
            who share our mission of creating sustainable communities.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="h-16 px-10 rounded-2xl bg-white text-purple-600 text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
            >
              Send Us Your Resume
              <span className="material-symbols-outlined">upload</span>
            </Link>
            <Link
              to="/about"
              className="h-16 px-8 rounded-2xl border-2 border-white/30 text-white font-semibold transition-all hover:border-white hover:bg-white/10 flex items-center gap-3"
            >
              Learn More About Us
              <span className="material-symbols-outlined">info</span>
            </Link>
          </div>
          <div className="mt-8 text-sm opacity-75">
            Email us at: dhieumajok211@gmail.com
          </div>
        </div>
      </section>
    </>
  )
}
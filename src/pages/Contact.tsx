import { useState } from 'react'

const contactInfo = [
  {
    icon: 'mail',
    title: 'Email',
    value: 'dhieumajok211@gmail.com',
    href: 'mailto:dhieumajok211@gmail.com',
  },
  {
    icon: 'location_on',
    title: 'Location',
    value: 'South Sudan',
    href: '#',
  },
  {
    icon: 'schedule',
    title: 'Working Hours',
    value: 'Mon - Fri: 8AM - 6PM',
    href: '#',
  },
]

const inquiryTypes = [
  'General Inquiry',
  'Request a Quote',
  'Partnership',
  'Support',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-green-200/30 dark:bg-green-900/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold mb-8">
                <span className="material-symbols-outlined text-lg">chat</span>
                Let's Connect
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8 font-display">
                Get in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                  Touch
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Have questions about our services? Want to discuss a partnership? 
                We'd love to hear from you.
              </p>
            </div>

            {/* Contact Illustration */}
            <div className="relative">
              <img 
                src="/Contact us-cuate.svg" 
                alt="Contact Us" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-xl animate-float"
              />
              
              {/* Floating contact icons */}
              <div className="absolute -top-4 -right-8 bg-green-500 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              
              <div className="absolute bottom-8 -left-8 bg-blue-500 text-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                <span className="material-symbols-outlined text-xl">phone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-soft hover:shadow-lg transition-all hover:-translate-y-1 flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{info.icon}</span>
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                    {info.title}
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-surface-dark rounded-[3rem] shadow-xl p-10 md:p-16 border border-slate-100 dark:border-white/5">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 text-primary flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-primary hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 font-display">Send Us a Message</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Fill out the form below and we'll respond as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-background-dark focus:ring-0 focus:border-primary outline-none transition-all font-medium"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-background-dark focus:ring-0 focus:border-primary outline-none transition-all font-medium"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-background-dark focus:ring-0 focus:border-primary outline-none transition-all font-medium"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-background-dark focus:ring-0 focus:border-primary outline-none transition-all font-medium"
                        placeholder="+211 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-background-dark focus:ring-0 focus:border-primary outline-none transition-all font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-background-dark focus:ring-0 focus:border-primary outline-none transition-all font-medium resize-none"
                      placeholder="Tell us about your waste management needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-slate-900 hover:bg-slate-800 dark:bg-primary dark:hover:bg-primary-dark text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/Water pollution-bro.svg" 
                alt="Environmental Protection" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
                Protecting Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  Environment
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Every day we don't act on proper waste management, our environment suffers. 
                Bintraq is here to change that story for South Sudan.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm">eco</span>
                  </div>
                  <span className="text-lg font-medium">Prevent water contamination</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">health_and_safety</span>
                  </div>
                  <span className="text-lg font-medium">Improve public health</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-sm">location_city</span>
                  </div>
                  <span className="text-lg font-medium">Create cleaner cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

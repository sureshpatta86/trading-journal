import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-8">
            <Logo size="lg" />
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: June 18, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Welcome to Trading Journal. These terms and conditions outline the rules and regulations for the use of our service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using Trading Journal, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-6">
              Permission is granted to temporarily use Trading Journal for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The information on this service is provided on an 'as is' basis. To the fullest extent permitted by law, Trading Journal excludes all representations, warranties, and conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at support@tradingjournal.com
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link 
            href="/auth/signup" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

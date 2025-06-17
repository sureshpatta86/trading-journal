import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="text-center space-y-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Logo size="xl" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Track Your Trading Success
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional trading journal to track trades, analyze performance, and improve your trading strategy with comprehensive insights and analytics.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/auth/login"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sign In
          </Link>
          <Link 
            href="/auth/signup"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
          >
            Create Account
          </Link>
        </div>
      </div>
    </main>
  )
}
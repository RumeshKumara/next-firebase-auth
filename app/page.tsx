import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Next Firebase Auth
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A simple and secure authentication example using Next.js and Firebase.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link 
            href="/login"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Login
          </Link>
          <Link 
            href="/signup"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Sign Up
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
          <ul className="text-left text-gray-700 space-y-2">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Secure Firebase Authentication
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Protected Dashboard Routes
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Modern Next.js 14 App Router
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Responsive Design with Tailwind CSS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

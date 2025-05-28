import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
           Rasheed
          </h1>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
           Aptitude Test Challenges
          </h1>
          <p className="text-gray-600">
            <a href="mailto:mra.rasheedd@gmail.com">mra.rasheedd@gmail.com</a>
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="space-y-4">
          <Link href="/ChallengeOne" className="block group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 group-hover:border-blue-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Challenge One
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Simple Calculator Challenge
                  </p>
                </div>
                <div className="text-blue-500 group-hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/ChallengeTwo" className="block group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 group-hover:border-green-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    Challenge Two
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Navbar Design Challenge
                  </p>
                </div>
                <div className="text-green-500 group-hover:text-green-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/ChallengeThree" className="block group">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 group-hover:border-purple-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    Challenge Three
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Two Sum II - Input Array Is Sorted
                  </p>
                </div>
                <div className="text-purple-500 group-hover:text-purple-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Feel free to contact me if you need anything.
          </p>
        </div>
      </div>
    </div>
  );
}

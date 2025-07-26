import DownloadButton from './DownloadButton'

export default function Preview({ section }) {
  if (!section) return (
    <div className="text-center text-gray-500 italic mt-6 animate-pulse">
      No section data
    </div>
  )

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 animate-gradient-x" />

      <DownloadButton targetId="download-section" />

      <div
        id="download-section"
        className="mt-8 p-8 rounded-3xl shadow-2xl backdrop-blur-md bg-white/80 dark:bg-white/5 ring-1 ring-gray-200 dark:ring-gray-800 transition-all duration-500 space-y-8 animate-fade-in"
      >

        {/* Prompt Header */}
        <div className="text-center space-y-2 animate-fade-in-up delay-100">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            ✨ Generated from Prompt
          </h1>
          <p className="text-blue-700 dark:text-blue-400 italic">
            {section.prompt}
          </p>
        </div>

        {/* Hero Section */}
        <div className="overflow-hidden rounded-2xl animate-fade-in-up delay-200">
          <img
            src={section.hero?.imageUrl}
            alt="Hero"
            className="w-full h-64 object-cover transform hover:scale-105 transition duration-700 ease-in-out rounded-xl shadow-lg"
          />
          <p className="text-lg font-medium text-center mt-4 text-gray-700 dark:text-gray-300">
            {section.hero?.text}
          </p>
        </div>

        {/* About Section */}
        <div className="animate-fade-in-up delay-300">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">📘 About</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            {section.about}
          </p>
        </div>

        {/* Contact Section */}
        <div className="animate-fade-in-up delay-400">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">📞 Contact</h2>
          <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> {section.contact?.email}</p>
          <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> {section.contact?.number}</p>
        </div>
      </div>
    </div>
  )
}

export default function DownloadButton({ targetId }) {
    const handleDownload = () => {
      const content = document.getElementById(targetId)
      if (!content) return
  
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Exported Section</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4">
          ${content.outerHTML}
        </body>
        </html>
      `
  
      const blob = new Blob([htmlContent], { type: "text/html" })
      const url = URL.createObjectURL(blob)
  
      const a = document.createElement("a")
      a.href = url
      a.download = "section.html"
      a.click()
  
      URL.revokeObjectURL(url)
    }
  
    return (
      <button
        onClick={handleDownload}
        title="Download as HTML"
        className="absolute top-2 right-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l4-4m-4 4l-4-4m8 8H8a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v16a2 2 0 01-2 2z" />
        </svg>
      </button>
    )
  }
  
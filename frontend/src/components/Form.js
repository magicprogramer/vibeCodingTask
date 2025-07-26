'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPrompt, submitPrompt, getOldSections } from '@/redux/slices/formSlice'
import Preview from './preview'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { motion, AnimatePresence } from 'framer-motion'

export default function FormSection() {
  const dispatch = useDispatch()
  const { prompt, loading, previewData, oldSections } = useSelector((state) => state.form)

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(getOldSections())
  }, [dispatch])

  useEffect(() => {
    if (previewData?.new) setShowModal(true)
  }, [previewData])

  const handleChange = (e) => dispatch(setPrompt(e.target.value))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (prompt.trim() !== '') {
      dispatch(submitPrompt(prompt))
    }
  }

  const closeModal = () => setShowModal(false)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?coding)' }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Prompt Builder</h1>
            <p className="text-lg md:text-xl">This is a Vibe Coding Challenge</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-10 space-y-4 p-4">
        <label className="block text-lg font-semibold text-gray-700 dark:text-white text-center">Your Prompt</label>
        <textarea
          name="prompt"
          value={prompt}
          onChange={handleChange}
          rows={5}
          className="w-full border rounded-xl px-4 py-3 shadow-md resize-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Enter your creative prompt here..."
        />
        <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r  flex flex-center text-center from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Generate Section'}
        </button>
        </div>
      </form>

      {/* Modal */}
      <AnimatePresence>
        {showModal && previewData?.new && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-700 dark:text-white hover:text-red-600 transition"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">New Generated Section</h2>
              <Preview section={previewData.new} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Old Sections */}
      {oldSections?.length > 0 && (
        <div className="mt-20 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center dark:text-white">Previous Sections</h2>
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            spaceBetween={30}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            className="w-full max-w-6xl mx-auto"
          >
            {oldSections.map((section, idx) => (
              <SwiperSlide key={section._id} className="w-[280px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-xl shadow-xl bg-white dark:bg-gray-800 p-4 h-full"
                >
                  <Preview section={section} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  )
}

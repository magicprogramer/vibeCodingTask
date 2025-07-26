'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPrompt, submitPrompt, getOldSections } from '@/redux/slices/formSlice'
import Preview from './preview'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { motion } from 'framer-motion'

export default function FormSection() {
  const dispatch = useDispatch()
  const { prompt, loading, previewData, oldSections } = useSelector((state) => state.form)

  useEffect(() => {
    dispatch(getOldSections())
  }, [dispatch])

  const handleChange = (e) => {
    dispatch(setPrompt(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (prompt.trim() !== '') {
      dispatch(submitPrompt(prompt))
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?coding)' }}>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Prompt Builder</h1>
            <p className="text-lg md:text-xl">This is a Vibe Coding Challenge</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-10 space-y-4 p-4">
        <label className="block text-lg font-semibold text-gray-700">Your Prompt</label>
        <textarea
          name="prompt"
          value={prompt}
          onChange={handleChange}
          rows={5}
          className="w-full border rounded-lg px-4 py-3 shadow-sm resize-none"
          placeholder="Enter your creative prompt here..."
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Generate Section'}
        </button>
      </form>

      {/* New Preview Section */}
      {previewData?.new && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mt-12 p-4"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">New Generated Section</h2>
          <div className="rounded-lg shadow-lg p-4 bg-white">
            <Preview section={previewData.new} />
          </div>
        </motion.div>
      )}

      {/* Old Sections Slider */}
      {oldSections?.length > 0 && (
        <div className="mt-20 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Previous Sections</h2>
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
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
                  className="rounded-lg shadow-md bg-white p-4 h-full"
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

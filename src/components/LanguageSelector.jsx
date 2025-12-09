import React from 'react'
import useStore from '../store/useStore'
import { Select } from './ui/select'
import { Languages } from 'lucide-react'

const LanguageSelector = () => {
  const language = useStore((state) => state.language)
  const loadTranslations = useStore((state) => state.loadTranslations)
  const translations = useStore((state) => state.translations)

  const handleLanguageChange = (e) => {
    const newLang = e.target.value
    loadTranslations(newLang)
  }

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-5 h-5 text-slate-600" />
      <Select value={language} onChange={handleLanguageChange}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </Select>
    </div>
  )
}

export default LanguageSelector

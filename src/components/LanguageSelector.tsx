import { Languages } from 'lucide-react'
import useStore from '../store/useStore'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const LanguageSelector = () => {
  const language = useStore((state) => state.language)
  const loadTranslations = useStore((state) => state.loadTranslations)

  const handleLanguageChange = (value: string | null) => {
    if (value) {
      loadTranslations(value)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-5 h-5 text-slate-600 dark:text-slate-400" />
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[150px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="es">Español</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default LanguageSelector

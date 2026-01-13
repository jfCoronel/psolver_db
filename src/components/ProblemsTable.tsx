import { useMemo } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import useStore from '../store/useStore'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import ProblemDetail from './ProblemDetail'
import type { Problem } from '../types'

const ProblemsTable = () => {
  const problems = useStore((state) => state.problems)
  const filters = useStore((state) => state.filters)
  const sortConfig = useStore((state) => state.sortConfig)
  const setSortConfig = useStore((state) => state.setSortConfig)
  const selectedProblem = useStore((state) => state.selectedProblem)
  const setSelectedProblem = useStore((state) => state.setSelectedProblem)
  const translations = useStore((state) => state.translations)

  const t = translations.table || {}

  const handleSort = (key: keyof Problem) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const SortIcon = ({ columnKey }: { columnKey: keyof Problem }) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowUpDown className="ml-2 h-4 w-4 inline" />
    }
    return sortConfig.direction === 'asc' ? (
      <ArrowUp className="ml-2 h-4 w-4 inline" />
    ) : (
      <ArrowDown className="ml-2 h-4 w-4 inline" />
    )
  }

  const filteredAndSortedProblems = useMemo(() => {
    let filtered = problems.filter((problem) => {
      // Aplicar filtro 1
      const filter1Match =
        !filters.filter1.column ||
        !filters.filter1.value ||
        String(problem[filters.filter1.column])
          .toLowerCase()
          .includes(filters.filter1.value.toLowerCase())

      // Aplicar filtro 2
      const filter2Match =
        !filters.filter2.column ||
        !filters.filter2.value ||
        String(problem[filters.filter2.column])
          .toLowerCase()
          .includes(filters.filter2.value.toLowerCase())

      return filter1Match && filter2Match
    })

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key!]
        const bValue = b[sortConfig.key!]

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }

    return filtered
  }, [problems, filters, sortConfig])

  if (problems.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 dark:text-slate-400">
        {t.noProblems || 'No hay problemas disponibles'}
      </div>
    )
  }

  if (filteredAndSortedProblems.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 dark:text-slate-400">
        {t.noResults || 'No se encontraron resultados'}
      </div>
    )
  }

  return (
    <div className="rounded-md border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-tl-md"
              onClick={() => handleSort('name')}
            >
              {t.name || 'Nombre'}
              <SortIcon columnKey="name" />
            </TableHead>
            <TableHead
              className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => handleSort('date')}
            >
              {t.date || 'Fecha'}
              <SortIcon columnKey="date" />
            </TableHead>
            <TableHead
              className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => handleSort('author')}
            >
              {t.author || 'Autor'}
              <SortIcon columnKey="author" />
            </TableHead>
            <TableHead
              className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => handleSort('subject')}
            >
              {t.subject || 'Materia'}
              <SortIcon columnKey="subject" />
            </TableHead>
            <TableHead
              className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => handleSort('category')}
            >
              {t.category || 'Categoría'}
              <SortIcon columnKey="category" />
            </TableHead>
            <TableHead className="rounded-tr-md">{t.comment || 'Comentario'}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAndSortedProblems.map((problem) => {
            const isSelected = selectedProblem?.id === problem.id
            return (
              <>
                <TableRow
                  key={problem.id}
                  className={`cursor-pointer ${isSelected ? 'bg-slate-100 dark:bg-slate-700' : ''}`}
                  onClick={() => setSelectedProblem(isSelected ? null : problem)}
                >
                  <TableCell className="font-medium">{problem.name}</TableCell>
                  <TableCell>{problem.date}</TableCell>
                  <TableCell>{problem.author}</TableCell>
                  <TableCell>{problem.subject}</TableCell>
                  <TableCell>{problem.category}</TableCell>
                  <TableCell>{problem.comment}</TableCell>
                </TableRow>
                {isSelected && (
                  <TableRow key={`detail-${problem.id}`}>
                    <TableCell colSpan={6} className="p-0">
                      <ProblemDetail problem={problem} />
                    </TableCell>
                  </TableRow>
                )}
              </>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default ProblemsTable

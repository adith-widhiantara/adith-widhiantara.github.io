import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function fmtYM(ym: string): string {
  const [y, m] = ym.split('-')
  return `${MONTHS[parseInt(m) - 1]} ${y}`
}

export function formatPeriod(start: string, end: string | null, current: boolean): string {
  return `${fmtYM(start)} – ${current || !end ? 'Present' : fmtYM(end)}`
}

export function getDuration(start: string, end: string | null): string {
  const [sy, sm] = start.split('-').map(Number)
  const now = new Date()
  const ey = end ? parseInt(end.split('-')[0]) : now.getFullYear()
  const em = end ? parseInt(end.split('-')[1]) : now.getMonth() + 1
  const total = (ey - sy) * 12 + (em - sm)
  const yrs = Math.floor(total / 12)
  const mos = total % 12
  if (yrs === 0) return `${mos} mo${mos !== 1 ? 's' : ''}`
  if (mos === 0) return `${yrs} yr${yrs !== 1 ? 's' : ''}`
  return `${yrs} yr${yrs !== 1 ? 's' : ''} ${mos} mo${mos !== 1 ? 's' : ''}`
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

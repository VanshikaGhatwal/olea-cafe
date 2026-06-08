interface SectionLabelProps {
  label: string
  className?: string
  light?: boolean
}

export default function SectionLabel({ label, className = '', light = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`h-px w-12 ${light ? 'bg-gold/60' : 'bg-gold'}`} />
      <span
        className={`text-xs tracking-[0.3em] uppercase font-medium ${
          light ? 'text-gold/80' : 'text-gold'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

import type { ReactNode } from "react"

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FloatingCard({ children, className = "", delay = 0 }: FloatingCardProps) {
  return (
    <div className={`relative group ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        {children}
      </div>
    </div>
  )
}

'use client'

import React from 'react'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
  gradient?: boolean
  border?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, interactive = false, gradient = false, border = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'bg-white rounded-xl shadow-soft p-6',
          interactive && 'hover:shadow-medium transition-all duration-300 hover:translate-y-[-4px] cursor-pointer',
          gradient && 'bg-gradient-to-br from-white to-slate-50',
          border && 'border border-slate-100',
          !interactive && 'transition-all duration-300',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card

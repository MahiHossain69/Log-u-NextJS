import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

export function Button({ className, children, ...props }: ButtonProps) {
  // Pass the className prop to the button element
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

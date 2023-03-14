import React from 'react'

export interface LinkProps {
  href: string
  children?: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({children, href}) => {
  return (
  <a rel='noopener' href={href} target="_blank">{children}</a>
  )
}

import React from 'react'

export interface TopicProps {
  title: string
  children?: React.ReactNode
}

export const Topic: React.FC<TopicProps> = ({title, children}) => {
  return (
    <div className="p-3 border-solid border-2 shadow-lg shadow-slate-500 border-slate-700 rounded-lg w-full grow">
      <h1 className="text-sky-500 text-2xl font-bold select-none">{title}</h1>
      <div className="p-3">
      {children}
      </div>
    </div>
  )
}

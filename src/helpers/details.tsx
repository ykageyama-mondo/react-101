import React, {useState} from 'react'

export interface DetailsProps {
  summary: string
  children?: React.ReactNode
}

export const Details: React.FC<DetailsProps> = ({summary, children}) => {
  const [show, setShow] = useState(false)

  return (
    <div className={'details animation-sweep ' + (show ? 'open' : '')} >
      <div className='summary cursor-pointer select-none' onClick={() => setShow(!show)}>🔹{summary}</div>
      <p className={'text-slate-800 detail bg-slate-200 rounded p-1' + (show ? '' : ' h-0 invisible')}>{children}</p>
    </div>
  )
}

import {Sandpack} from '@codesandbox/sandpack-react'
import React from 'react'


export const Example: React.FC<{code: string}> = ({code}) => {
  const parsed = code.trim()
  const lines = (parsed.match(/\n/g) || []).length

  return (
    <Sandpack
      template='react'
      options={{
        showLineNumbers: true,
        showConsoleButton: true,
        editorHeight: `${lines * 22}px`
      }}
      theme={'dark'}
      files={{
        '/App.js': {
          code: parsed,
          active: true,
          hidden: true,
        },
      }}
    />
  )
}

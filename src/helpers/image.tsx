import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const Image: React.FC<{title: string, src: string}> = (props) => {
  return (
    <Zoom>
      <img {...props}/>
    </Zoom>
  )
}

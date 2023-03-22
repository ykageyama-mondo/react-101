import './App.css'
import {WhatIsReact} from './topics/1.WhatIsReact'
import {HowDoesReactKnowWhenToRender} from './topics/3.HowDoesReactRender'
import {WhatIsState} from './topics/2.WhatIsState'
import {Walkthrough} from './topics/4.Walkthrough'
import {Topic} from './helpers/topic'
import {Link} from './helpers/link'

function App() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center select-none">
        <img alt='react icon' src="../public/React-icon.svg" className="h-14"/>
        <h1 className='pl-2 text-5xl font-thin tracking-tighter text-slate-600'>React <span className='font-mono font-normal text-sky-600'>101</span></h1>
      </div>

      <Topic title="Some resources">
        <p>This repo is in Github: <Link href='https://github.com/ykageyama-mondo/react-101'>https://github.com/ykageyama-mondo/react-101</Link></p>
        <p>The React Docs are great and finally released: <Link href='https://react.dev'>react.dev</Link></p>
      </Topic>
      <WhatIsReact/>
      <WhatIsState/>
      <HowDoesReactKnowWhenToRender/>
      <Walkthrough/>
    </div>
  )
}

export default App

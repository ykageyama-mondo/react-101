import './App.css'
import {WhatIsReact} from './topics/1.WhatIsReact'
import {HowDoesReactKnowWhenToRender} from './topics/3.HowDoesReactRender'
import {WhatIsState} from './topics/2.WhatIsState'
import {Walkthrough} from './topics/4.Walkthrough'
function App() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center">
        <img alt='react icon' src="../public/React-icon.svg" className="h-14"/>
        <h1 className='pl-2 text-5xl font-thin tracking-tighter text-slate-600'>React <span className='font-mono font-normal text-sky-600'>101</span></h1>
      </div>

      <WhatIsReact/>
      <WhatIsState/>
      <HowDoesReactKnowWhenToRender/>
      <Walkthrough/>
    </div>
  )
}

export default App

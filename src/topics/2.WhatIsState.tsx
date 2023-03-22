import React from 'react'
import {Topic} from '../helpers/topic'
import {Image} from '../helpers/image'

import {Example} from '../helpers/example'
import example1 from '../examples/state1'
import example2 from '../examples/state2'
import example3 from '../examples/state3'
import example4 from '../examples/state4'
import positionExample1 from '../examples/position1'

import {Details} from '../helpers/details'
import {Link} from '../helpers/link'


export const WhatIsState = () => {
  return (
    <Topic title='State: What? How? When? Why?'>
      <div>
        <p className="text-lg font-bold">What is state?</p>
        <p>- State is a component's memory</p>
        <p>- State is not stored within the component but privately inside React allowing it to be kept between renders.</p>
        <p>- State is isolated to particular component instance (a position on the screen. More on that later)</p>
        <p>- When used inside components, state behaves like a snapshot at the point in time of rendering.</p>
        <p>- State is immutable (and we must always treat it this way)</p>
        <p>- Setting state triggers renders</p>
      </div>

      <div className='pt-4'>
        <p className="text-lg font-bold">How do I use state?</p>
        <p>With the <code><Link href='https://react.dev/reference/react/useState'>useState</Link></code> Hook.</p>

        <Details summary="Wait, what's a Hook?">
          Hooks are special functions starting with <code>use</code> that let you "hook into" different React features from your components.
          <br/>
          They have to be called at the top level of you component. <strong>You cannot use Hooks inside loops, conditions or nested functions and must be called before any early returns.</strong>.
          <br/>
          These rules are what allow React to correctly keep track of component state between multiple renders and useState calls.
          <br/>
          <br/>

          <Link href="https://legacy.reactjs.org/docs/hooks-rules.html#explanation">Explanation of why we need these rules</Link>
        </Details>
        <div className='pt-2'>
          <p className='text-md font-bold'>Gotcha 1: Replace</p>
          <Example code={example1}/>
          <div className='pt-2'>
            <Details summary="What's happening here?">
              <p className='font-bold pb-1'>
              Setting state only changes it for the next render.
              </p>
              <p>
                When we click <strong>Add 3</strong>, the value of <code>count</code> does not change. 
                Remember, state behaves like a snapshot at the point in time of rendering. <strong>It will never change within a render.</strong>
                <br/>
                So when count is <code>0</code>, we can imagine that we are actually calling <code>setCount(0 + 1)</code> 
              </p>
            </Details>
          </div>
        </div>
        <div className='pt-2'>
          <p className='text-md font-bold'>Gotcha 2: Updater function</p>
          <Example code={example2}/>
          <div className='pt-2'>
            <Details summary="What?">
              <p>
                When we click <strong>Add 5</strong>, we call <Link href='https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state'>setState with an updater function</Link>. React queues the updater functions and runs them in the same order during the next render. Once all updates are complete, React stores the final value.
                <br/>
                So when count is <code>0</code>, the first function returns <code>0 + 2</code> and the second returns <code>2 + 3</code>.
              </p>
            </Details>
          </div>
        </div>

        <div className='pt-2'>
          <p className='text-md font-bold'>Gotcha 3: Replace then update?</p>
          <Example code={example3}/>
          <div className='pt-2'>
            <Details summary=" ¯\_(ツ)_/¯ ">
              <p>
                Here, React will first replace count with 2 and then run <code>c + 2</code> where <code>c</code> is 2.
                <br/>
                You can imagine <code>setCount(2)</code> as the function <code>{`(c) => 2`}</code>.
              </p>
            </Details>
          </div>
        </div>

        <div className='pt-2'>
          <p className='text-md font-bold'>Gotcha 4: Object state</p>
          <Example code={example4}/>
          <div className='pt-2'>
            <Details summary=" ??? ">
              <p>
                React state must be is immutable. This includes objects. 
                <br/>
                When we mutate an object (for example by calling Array.push or updating a property), React does not detect that the component's state has changed so it does not trigger a render.

                <br/>
                Under the hood, React uses <code><Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is'>Object.is(state, prevState)</Link></code> to figure out whether the state has changed.
              </p>
            </Details>
          </div>
        </div>
      </div>

      <div className='pt-4'>
        <p className="text-lg font-bold">When do I use state?</p>
        <Image src="/diagrams/whenToUse.png" title="When to use diagram"></Image>
      </div>

      <div className='pt-4'>
        <p className="text-lg font-bold">How to structure your state</p>
        <Link href='https://react.dev/learn/choosing-the-state-structure#principles-for-structuring-state'>Reference to the React docs because this section is great and totally not becasue I ran out of time to prepare for this 😆</Link>
      </div>

      <div className='pt-4'>
        <p className="text-lg font-bold">How does state work?</p>
        <p>- State is tied to a <Link href="https://react.dev/learn/preserving-and-resetting-state">component's position in the UI tree</Link> (the JSX returned by your components)</p>
        <p>- Every component at a specific position has its own state</p>
        <p>- When the position of your component changes, the state is reset.</p>
        <p>- When the position of your component does not changes, the state is preserved.</p>
        <Example code={positionExample1}/>
      </div>
    </Topic>
  )
}

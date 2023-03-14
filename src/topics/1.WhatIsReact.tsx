import React from 'react'
import {Details} from '../helpers/details'
import {Link} from '../helpers/link'
import {Topic} from '../helpers/topic'

export const WhatIsReact = () => {
  return (
    <Topic title='What is React? Why should we use it?'>
      <blockquote>
        <p>
          Javascript Library for building user interfaces
        </p>
      </blockquote>
      <div className='pt-2'>
        <p className="text-lg font-medium">
        Key Concepts
        </p>
        <ul>
          <li>
            <Details summary="Components all the way down">
              <p>Written in <Link href="https://beta.reactjs.org/learn/writing-markup-with-jsx">JSX</Link>, all React views are built by composing React components.</p>
              <p>This allows us to easily reuse code throughout our application.</p>
              <small><Link href='https://beta.reactjs.org/learn/your-first-component'>Relevant Docs</Link></small>
            </Details>
          </li>
          <li>
            <Details summary="Declarative API">
              <p>Instead of manipulating the UI <Link href='https://en.wikipedia.org/wiki/Imperative_programming'>imperatively</Link> on user interaction, in React we <q>describe the different states that your component can be in, and switch between them in response to the user input</q> <small><Link href='https://beta.reactjs.org/learn/reacting-to-input-with-state'>[ref].</Link> </small></p>
              <p className='pt-3'>This allows us to model our UI as a state machine with user interaction causing state transitions. How a UI should change is abstracted to React's diffing and reconcilliation algorithms</p>
              <small><Link href='https://beta.reactjs.org/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative'>Relevant Docs</Link></small>
            </Details>
          </li>
          <li>
            <Details summary="Unidirectional data flow">
              <p>Data flows from parent components to their children. </p>
              Makes debugging simple since all you have to do is go up the component tree until you find where the problem data is coming from.
            </Details>
          </li>
          <li>
            <Details summary="Virtual DOM">
              <p>In a similar process to how our UBI software update works, React keeps a desired state of the UI and on deltas between the desired state and actual state(through React's <Link href='https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm'>diffing algorithm</Link>) will update the minimal required browser DOM nodes to match the desired DOM state.</p>
              <p className='pt-3'>This process of reconcilliation is much faster than tearing down and rebuilding the entire UI on every re-render and abstracts this complexity away from the developer so that we can go 🚀<i><strong>FAST</strong></i>🚀</p>
              <small><Link href='https://beta.reactjs.org/learn/preserving-and-resetting-state'>Relevant Docs</Link></small>
            </Details>
          </li>
        </ul>

      </div>
    </Topic>
  )
}

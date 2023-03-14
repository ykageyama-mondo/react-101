import React from 'react'
import {Link} from '../helpers/link'
import {Topic} from '../helpers/topic'

export const DeepDiveIntoHowReactWorks = () => {
  return (
    <Topic title='Deep dive into how React works'>
      <blockquote>
        <p>
        Imagine that your components are cooks in the kitchen, assembling tasty dishes from ingredients. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of requesting and serving UI has three steps:
        <ol className="pl-6">
          <li>Triggering a render (delivering the guest's order to the kitchen)</li>
          <li>Rendering the component (preparing the order in the kitchen)</li>
          <li>Committing to the DOM (placing the order on the table)</li>
        </ol></p>
        <figcaption><Link href="https://beta.reactjs.org/learn/render-and-commit">Render and Commit</Link> <cite>React Beta Docs</cite></figcaption>
      </blockquote>

      <div className='pt-5'>
        <div>
          <strong>
            Triggering a render
          </strong>
          <p>There are 2 reasons why a component might render</p>
          <p>1. </p>
        </div>

      </div>
    </Topic>
  )
}

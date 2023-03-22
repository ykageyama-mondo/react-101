import {Link} from '../helpers/link'
import {Topic} from '../helpers/topic'

export const HowDoesReactKnowWhenToRender = () => {
  return (
    <Topic title='How does React render?'>
      <blockquote>
        <p>
        Imagine that your components are cooks in the kitchen, assembling tasty dishes from ingredients. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of requesting and serving UI has three steps:
        <ol className="pl-6">
          <li>Triggering a render (delivering the guest's order to the kitchen)</li>
          <li>Rendering the component (preparing the order in the kitchen)</li>
          <li>Committing to the DOM (placing the order on the table)</li>
        </ol></p>
        <figcaption><Link href="https://react.dev/learn/render-and-commit">Render and Commit</Link> <cite>React Beta Docs</cite></figcaption>
      </blockquote>

      <div className='pt-5'>
        <div>
          <strong>
            Triggering a render
          </strong>
          <br/>

          <div>
            <p>There are 2 reasons why a component might render</p>
            <p className="pl-1">1. It's the initial render</p>
            <p className="pl-1">2. State of the component or its ancestors has changed. (We'll focus on this one)</p>
          </div>
        </div>
        <br/>

        <div>
          <strong>
            Rendering the component
          </strong>
          <br/>

          <div>
            <p>
              - React calls the component that triggered the render.
            </p>
            <p>
              - If that component returns another component, React will also render that component
            </p>
            <p>
              - This happens recursively until there are no more nested components
            </p>
            <p>
              - React creates the UI tree from the JSX returned from your components
            </p>
          </div>
        </div>
        <br/>

        <div>
          <strong>
            Committing to the DOM
          </strong>
          <br/>
          <div>
            <p>
              - Because DOM manipulations are costly, React (more accurately React DOM) computes and commits the minimal changes required to make the browser DOM match the desired DOM state (virtual DOM).
            </p>
            <p>
              - React will only <strong>update</strong> DOM nodes if there are changes (the JSX returned is different)
            </p>
            <p>
              - React will only <strong>change (replace/delete/create)</strong> DOM nodes if they are in a different position.
            </p>
          </div>
        </div>
      </div>
    </Topic>
  )
}

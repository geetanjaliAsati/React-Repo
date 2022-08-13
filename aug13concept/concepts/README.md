# Component Life Cycle methods in ReactJS

- The components like us, also are born(initializing - mounting), they grow(by updating) and then they die(unmounting) => This is known as component lifecycle

## Lifecycle Methods
- Initialization
- Mounting
- Updating
- Unmounting

### Initialization
- This is the phase in which the component is going to start its journey by setting up the state. This is usually done inside the constructor method

### Mounting
- constructor()
- componentWillMount() =>deprecated - was used in earlier version of react
- render()
- componentDidMount()

#### Constructor
- It's not a react provided method, it's a ES6 feature
- super(props) what does this do?
  - React uses the constructor to pass the props to parent Component extended from React library
  - Why? Passing of props to parent component helps us to use this.props in the component
- Never use setState in the constructor?
  - beause setState is designed to update the state and not for creation
- Side effects like calls to web api should be avoided in the constructor 
  - because web apis calls takes time to return result and by that time constructor method will complete it's execution
- Method binding can also be done in the constructor
  - this.handleSomething = this.handleSomething.bind(this)

#### componentWillMount
- We can update the state 
- Connection to the database can be established here
- This is placed between constructor and render
- Legacy method and React recommends not to use it in v.17 and above
- This method is rarely used. Whatever required by this time of life of component is already done by constructor or will be done by render method.

#### render
- This is the only required method in a cass component
- Executing this render method gives React an idea of what needs to updated on the actual DOM
- React keeps an original copy of DOM, calls it virtual DOM
- Changes happen on the virtual DOM, in the end React compares the virtual DOM with the original to change the latter.
- This method structures and prepares your jsxx code to return to DOM.

- Examines this.props & this.state  and return one of the following
  - React elements created via JSX, for eg. `<div></div>` or `<Initialize />`
  - Arrays & fragments(<></>)
  - Strings and numbers (Rendered as simple text node)
  - Booleans and null

- The render() function should be pure, it does not modify the component state. It returns the same result every time it's invoked & it does not directly interact with the browser.
- If you need to interact with the browser, do your work in componentDidMount()

#### componentDidMount
- Called after render
- Execution of this method means component is successfully mounted or created on real DOM
- Here we can do side effects like using timers, calling external api, adding event listeners
- This method, like componentWillMount is only called once in the lifecycle of the stateful component
- You can use setState here, but caution as it can trigger render method again to update DOM

### Updating 
- shouldComponentUpdate()
- componentWillUpdate()
- componentDidUpdate()

### Other Lifecycle methods
- componentWillUnmount()
- static getDerivedStateFromProps()
- getSnapshotBeforeUpdate() this is to be used in place of componentWillUpdate()


## FlowChart
- Component
    - constructor(props) - Initialization
    - componentWillMount()
    - render()
    - componentDidMount()
- State/Props Updates
    - shouldComponentUpdate()
        - if this returns false No re-rendering happens
    - componentWillUpdate()
    - render()
    - componentDidUpdate()
- componentWillUnmount()
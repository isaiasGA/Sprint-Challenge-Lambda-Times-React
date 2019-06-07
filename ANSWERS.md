What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

ProtoTypes are used in order to ensure that we are actually passing the type of data that we want to pass around. It is important to check the type of data because  as scaling of an app happens, it can be difficult to keep track of the data that is being passed around.

Describe a life-cycle event in React?
  
  The react lifecycle consists of several phases that describe the stages that an App can go through:
    - Birth/Mounting Phase: component is being built
    - Growth/Updating phase: setState can be used to change the component's state data, forcing a call to render. 
    - Death/Un-mounting phase: Component is removed from the screen
  
  
Explain the details of a Higher Order Component?
  
  HOCs are advanced JS patterns that allow us to reuse components logic. This means that an HOC is a function that recieves a Component as an argument and returns a new component source.
  
  
What are three different ways to style components in React? Explain some of the benefits of each.

1. By using a themed library of components such as Reactstrap
2. By using a library such as Styled components
3. Inline styling, which id basically styling directly into the JSX code.

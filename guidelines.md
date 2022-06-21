# Coding Guidelines - ReactJS



## Table of Contents

  1. [Basic Rules](#basic-rules)
  1. [Naming](#naming)
  1. [Declaration](#declaration)
  1. [Alignment](#alignment)
  1. [Quotes](#quotes)
  1. [Spacing](#spacing)
  1. [Props](#props)
  2. [Tags](#tags)
  3. [Methods](#using-handler-methods)
  
  
  

## Basic Rules

- Only include one React component per file.
- Use Functional components
- Always use JSX syntax.
- Do not use `React.createElement` unless you're initializing the app from a file that is not JSX.



## Naming
- **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

    ```jsx
    // bad
    import Footer from './Footer/Footer';

    // bad
    import Footer from './Footer/index';

    // good
    import Footer from './Footer';
    ```
    
- Use PascalCase naming convention for filename as well as component name, e.g. GlobalHeader.js

    ```javascript
    // Bad
    // Filename: foo.js

    const Foo = () => {}

    export default Foo;


    // Good
    // Filename: Foo.js

    const Foo = () => {}

    export default Foo;
    ```
- Use PascalCase for type names (Use Intefaces or Types).
- Do not use "I" as a prefix for interface names.
- Use PascalCase for enum values.
- Use camelCase for function names.
- Use camelCase for property names and local variables.
- Use whole words in names when possible.
- Use isXXXing or hasXXXXed for variables representing states of things (e.g. isLoading, hasCompletedOnboarding).


## Alignment
- Follow these alignment styles for JSX syntax

    ```javascript
    // bad
    <Foo superLongParam="bar"
        anotherSuperLongParam="baz" />

    // good
    <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
    />

    // if props fit in one line then keep it on the same line
    <Foo bar="bar" />

    // children get indented normally
    <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
    >
        <Spazz />
    </Foo>
    ```


## Quotes

- Always use double quotes (`"`) for JSX attributes, but single quotes for all other JS.

    ```javascript
    // bad
    <Foo bar='bar' />

    // good
    <Foo bar="bar" />

    // bad
    <Foo style={{ left: "20px" }} />

    // good
    <Foo style={{ left: '20px' }} />
    ```

## Props
- Always use camelCase for prop names.

```javascript
// bad
<Foo
    UserName="hello"
    phone_number={12345678}
/>

// good
<Foo
    userName="hello"
    phoneNumber={12345678}
/>
```



## Tags
- Always self-close tags that have no children.

    ```javascript
    // bad
    <Foo className="stuff"></Foo>

    // good
    <Foo className="stuff" />
    ```

- If your component has multi-line properties, close its tag on a new line.
    ```javascript
    // bad
    <Foo
        bar="bar"
        baz="baz" />

    // good
    <Foo
        bar="bar"
        baz="baz"
    />
    ```


## Stateless function components
For stateless components use the function syntax, introduced in React 0.14.

    ```javascript
    // Using an ES2015 (ES6) arrow function:
    var Aquarium = (props) => {
        var fish = getFish(props.species);
        return <Tank>{fish}</Tank>;
    };

    // Or with destructuring and an implicit return, simply:
    var Aquarium = ({species}) => (
        <Tank>
            {getFish(species)}
        </Tank>
    );

    // Then use: <Aquarium species="rainbowfish" />
    ```

[Read More](http://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components)


## Using handler methods

- Name methods using `'handle' + triggering event`, e.g. `handleClick`
- Bind handler using the ES6 arrow syntax, so inside the callback it has always the right context

    ```javascript
    const Foo = () => {

        handleClick = (e) => {
            // action
        }

        return <button onClick={handleClick}>Submit</button>;
    }
    ```



## Using “container” components for loading data from Stores


```javascript
// CommentListContainer.js

const CommentListContainer = () => {
    const [state, setState] = React.useState();

    useEffect(() => {
    fetch("url")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setState(data.message))
  },[]):
        
  return <CommentList comments={this.state.comments} />;
}



// CommentList.js

const CommentList = (props: Props) => {
    
    renderComment({body, author}) {
        return <li>{body}—{author}</li>;
    }
    
    return <ul> {props.comments.map(renderComment)} </ul>;
}
```

Source: https://medium.com/@learnreact/container-components-c0e67432e005



## Closing Components without children

```javascript
    return (
        <Foo>
            <Bar />
        </Foo>
    );
```


## List iterations

When rendering a list of components from an array, do it inline if it makes sense. If the map function is too long or complicated, consider extracting it out into its own method on the component class.

```javascript
    return (
        <ul>
            {this.state.fooList.map(fooItem => <FooItem>{fooItem}</FooItem>)}
        </ul>
    );
```


## Formatting Attributes
Indentation and new line for component/element attributes.
```javascript
<input
    type="text"
    value={this.state.foo}
    onChange={this._handleInputChange.bind(this, 'foo')}
/>
```



## CSS styles
- Static properties should be set in the SCSS, dynamic ones in JS.

```css
.Foo {
    background-color: #ff0;
}
```

```javascript
const Foo = () => {
    const styles = {
        'transform': 'translateX(' + this.state.position + ' + px)'
    };
    
    return <div className="Foo" styles={classes}>Foo Header</div>;
}
```

- Use CSS modules (style files)
- Tailwind CSS classes:
```tsx
const BUTTON = 'w-24 full-rounded p-4 ....';
``` 



## Use higherOrder functions to add scroll/resize listeners
https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750


## Sources

- https://github.com/kriasoft/react-starter-kit/blob/master/docs/react-style-guide.md
- https://web-design-weekly.com/2015/01/29/opinionated-guide-react-js-best-practices-conventions/
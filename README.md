# Conditional Wrapper component for React

## Reason for this component
Occasionally, you may want to wrap a React component with another component, but only when a certain condition is true. There's no native React component that can do this for you, and many Higher Order Components out there add a ton of options for conditionally rendering a wrapping component.

This component does only one thing: Conditionally wrap a child component with a wrapping component, based on a condition that's passed as a prop.

## Installation
`npm i conditional-wrapper`

## Usage
```
import { ConditionalWrapper } from 'conditional-wrapper';

const condition = true; // any truthy or falsy value

<ConditionalWrapper
	condition={condition}
	wrapper={(children) => <div>This is the wrapper component, followed by the children: {children}</div>}>
		<p>This is the child component.</p>
</ConditionalWrapper>
```

## Props

### `condition: boolean`
The `condition` prop takes a `boolean` value that indicates whether the wrapper should be rendered or not.

### `wrapper: (children: JSX.Element | JSX.Element[]) => JSX.Element`
The `wrapper` prop takes a `function` with a parameter that represents the `children` prop of the `<ConditionalWrapper />`. The function returns the wrapping component that should be rendered in case the `condition` prop evaluates to `true`.

### `children: JSX.Element | JSX.Element[]`
The `children` prop represents the direct children of the `<ConditionalWrapper />` component.
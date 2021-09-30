import * as React from 'react';
import { queryByTestId, render } from '@testing-library/react';
import { ConditionalWrapper } from "..";

const wrapperFunction = (children: JSX.Element | JSX.Element[]) => <div data-testid="wrapper">{children}</div>;
const childComponent = <p data-testid="child">Child</p>;

test('renders wrapper when condition is true', () => {
	render(
		<ConditionalWrapper
			condition={true}
			wrapper={wrapperFunction}>
				{childComponent}
		</ConditionalWrapper>
	);

	expect(queryByTestId(document.documentElement, 'wrapper')).toBeInTheDocument;
	expect(queryByTestId(document.documentElement, 'child')).toBeInTheDocument;
});

test('doesn\'t render wrapper when condition is false', () => {
	render(
		<ConditionalWrapper
			condition={false}
			wrapper={wrapperFunction}>
				{childComponent}
		</ConditionalWrapper>
	);

	expect(queryByTestId(document.documentElement, 'wrapper')).not.toBeInTheDocument;
	expect(queryByTestId(document.documentElement, 'child')).toBeInTheDocument;
});
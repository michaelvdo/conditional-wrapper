import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import { ConditionalWrapper } from "..";

test('renders wrapper when condition is true', () => {
	const { container } = render(
		<ConditionalWrapper
			condition={true}
			wrapper={(children) => <div className="wrapper">{children}</div>}><p className="child">Child</p>
		</ConditionalWrapper>
	);

	expect(container.className).toBe('wrapper');
});

test('doesn\'t render wrapper when condition is false', () => {
	const { container } = render(
		<ConditionalWrapper
			condition={false}
			wrapper={(children) => <div className={'wrapper'}>{children}</div>}><p>Child</p>
		</ConditionalWrapper>
	);

	expect(container.className).toBe('child');
});
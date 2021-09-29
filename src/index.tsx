import * as React from "react";

export type Props = {
  condition: boolean;
  wrapper: (children: JSX.Element | JSX.Element[]) => JSX.Element;
  children: JSX.Element | JSX.Element[];
}

export function ConditionalWrapper({ condition, wrapper, children }: Props): JSX.Element {
  return condition ? wrapper(children) : <>{children}</>;
}

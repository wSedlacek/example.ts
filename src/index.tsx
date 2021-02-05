import React, { Component, FC, ReactElement } from 'react';

export interface ExampleAProps {}

export const ExampleA: FC<ExampleAProps> = () => {
  return <h1>Hello World</h1>;
};

export interface ExampleBProps {}

export class ExampleB extends Component<ExampleBProps> {
  public render(): ReactElement {
    return <span>Another Example</span>;
  }
}

import React, { Component, FC, ReactElement } from 'react';

export const ExampleA: FC = () => {
  return <h1>Hello World</h1>;
};

export class ExampleB extends Component {
  public render(): ReactElement {
    return <span>Another Example</span>;
  }
}

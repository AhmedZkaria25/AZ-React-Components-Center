import React, { Component, ElementType, ReactElement, ReactNode } from 'react';

export interface Card {
  id: number;
  title: string;
//   component: React.ReactNode | Function ;
  // component?: React.ReactNode | (() => React.ReactNode) | () => {};
  // component?: () => {}|Function;
  // component?: Element | ElementType | React.ReactNode | (() => React.ReactNode) | any;
  // component?: any;
  code: string;
  style: string|ReactElement|ReactNode|any;
  // style: string|(props: any) => jsx.Element|ReactNode;
  // style: string|ReactNode;
}

export interface TodoItem_1 {
  name: string;
  desc: string;
}

export const FormCards: Card[] = [
  {
    id: 1,
    title: 'Simple Button',
    code: `const Button = () => {\n  return (\n    <button style={{\n      padding: '10px 20px',\n      backgroundColor: '#61dafb',\n      color: '#282c34',\n      border: 'none',\n      borderRadius: '4px',\n      cursor: 'pointer',\n      fontSize: '16px',\n      fontWeight: 500,\n    }}>\n      Click Me\n    </button>\n  );\n};`,
    style: `.button {\n  padding: 10px 20px;\n  background-color: #61dafb;\n  color: #282c34;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n}`,
  },
  {
    id: 2,
    title: 'Input Field',
    code: `const Input = () => {\n  return (\n    <input\n      type="text"\n      placeholder="Enter text..."\n      style={{\n        padding: '10px',\n        border: '2px solid #61dafb',\n        borderRadius: '4px',\n        fontSize: '16px',\n        width: '100%',\n        boxSizing: 'border-box',\n        backgroundColor: '#f7f7f7',\n        color: '#282c34',\n      }}\n    />\n  );\n};`,
    style: `.input {\n  padding: 10px;\n  border: 2px solid #61dafb;\n  border-radius: 4px;\n  font-size: 16px;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #f7f7f7;\n  color: #282c34;\n}`,
  },
];


export const TodoItems_1: TodoItem_1[] = [{
  name: 'TodoItems-1',
  desc: 'loram ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}];
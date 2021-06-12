import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <div {...props}>{element}</div>;
}

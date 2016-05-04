jest.unmock('../components/Content');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Content from '../components/Content';

describe('Showing header', () => {
  it('Renders a Header text with a short Intro Paragraph', () => {
    const header = TestUtils.renderIntoDocument(
      <Content />
    )

    const headerNode = ReactDOM.findDOMNode(header);

    expect(headerNode.textContent.length).toBeLessThan(75);
    expect(headerNode.textContent.length).toBeGreaterThan(50);    
  });
})

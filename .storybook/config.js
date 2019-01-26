import { configure } from '@storybook/react';

const loadStories = () => {
  require('../packages/baz/__stories__/');
};

configure(loadStories, module);

import { configure } from '@storybook/react';

const loadStories = () => {
  const requireContext = require.context('../packages', true, /__stories__\/index.js$/);
  requireContext.keys().map(requireContext);
};

configure(loadStories, module);

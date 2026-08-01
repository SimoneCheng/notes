/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  web: [
    'web/web-resources',
    'web/frontend-resources',
    {
      type: 'category',
      label: 'HTML & CSS',
      items: ['web/html-metadata', 'web/html-css-style-guide'],
    },
    {
      type: 'category',
      label: 'JavaScript',
      items: [
        'web/js-types-and-operators',
        'web/js-execution-contexts',
        'web/js-objects-and-functions-1',
        'web/js-objects-and-functions-2',
        'web/javascript-style-guide',
      ],
    },
    {
      type: 'category',
      label: 'React',
      items: ['web/react-resources', 'web/react-style-guide'],
    },
    'web/session-and-cookie',
  ],
  compilerRuntime: [
    'compiler-runtime/sea-of-nodes',
    'compiler-runtime/v8-ignition',
    'compiler-runtime/v8-turbofan',
  ],
  systems: [
    'systems/csapp-bomb-lab',
    'systems/linux-before-submit-patch',
    'systems/docker-overlayfs',
    'systems/install-mysql',
  ],
  fundamentals: [
    'fundamentals/learning-resources',
    'fundamentals/general-resources',
    {
      type: 'category',
      label: 'Data Structures',
      items: [
        'fundamentals/recursion',
        'fundamentals/stack-and-queue',
        'fundamentals/priority-queue',
        'fundamentals/tree-and-binary-tree',
        'fundamentals/binary-tree-traversal',
      ],
    },
    {
      type: 'category',
      label: 'Git & Collaboration',
      items: [
        'fundamentals/git-basics',
        'fundamentals/git-send-email-gmail',
        'fundamentals/writing-a-good-pull-request',
      ],
    },
  ],
};

module.exports = sidebars;

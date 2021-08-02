const path = require('path');

module.exports = plop => {
  plop.addHelper('absPath', p => path.resolve(plop.getPlopfilePath(), p));
  plop.addHelper('name', p => p.split('/').pop());

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Where should your component live?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{absPath path}}/{{pascalCase (name path)}}.tsx',
        templateFile: './templates/plop/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '{{absPath path}}/styles.ts',
        templateFile: './templates/plop/Component.styles.ts.hbs',
      },
      {
        type: 'add',
        path: '{{absPath path}}/{{pascalCase (name path)}}.test.tsx',
        templateFile: './templates/plop/Component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: '{{absPath path}}/index.ts',
        templateFile: './templates/plop/Component.index.ts.hbs',
      },
    ],
  });
};

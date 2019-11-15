/** Example file/folder data. */
export const files = [
  {
    name: 'Azrin Amin',
    type: 'account_circle',
    children: [      
      { 
         name: 'Friend Level 1', 
         type: 'stars',
         children: [
            { 
               name: 'Friend Level 2', 
               type: 'stars', 
               children: [ { name: 'package.json', type: 'file' }, { name: 'BUILD.bazel', type: 'file' } ] 
            } 
        ]
      },
      { name: 'Friend Level 1', type: 'stars' },
      { name: 'Friend Level 1', type: 'stars' }      
    ]
  }
];

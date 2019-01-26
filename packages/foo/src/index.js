import { bar, barBaz } from '@azz/bar';
import foo from './foo';

// eslint-disable-next-line no-console
console.log(foo(), bar(), barBaz());

export { default as foo } from './foo';

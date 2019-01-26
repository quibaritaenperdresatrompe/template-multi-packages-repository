import { storiesOf } from '@storybook/react';
import React from 'react';

import { Baz } from '../src';

storiesOf('Baz', module).add('without props', () => <Baz>Hello Button</Baz>);

// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-webpack
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {expect} from '@loopback/testlab';

export function assertGreetings(greetings: string[]) {
  greetings = greetings.map(g => g.replace(/\[[^\[\]]+\] /, ''));
  expect(greetings).to.eql([
    '(en) Hello, Jane!',
    'Hello, John!',
    '(zh) 你好，John！',
    '(en) Hello, Jane!',
  ]);
}

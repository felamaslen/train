import { expect } from 'chai';
import { Map as map } from 'immutable';

import appState from '../../src/app/lib/reduction';

import {
} from '../../src/app/reducers/app.reducer';

describe('App', () => {
    it('should define a reduction', () => {
        expect(appState).to.be.instanceof(map);
    });
});

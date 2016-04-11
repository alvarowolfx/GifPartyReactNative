/**
 * Created by alvaroviebrantz on 07/03/16.
 */

/* Monkey patch react native to use mocha + enzyme */
require('react-native-mock/mock');
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiImmutable);
chai.use(chaiEnzyme());
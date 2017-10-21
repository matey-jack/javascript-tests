const td = require('testdouble');

const fakeNetwork = td.replace('../lib/network');
const FakeConnection = td.constructor(require('../lib/network').Connection);
const printerUnderTest = require('../lib/printer');

describe('printer', function () {
  
  it('connects and sends', async function () {
    const connection = new FakeConnection();

    td.when(fakeNetwork.connect(td.matchers.isA(String)))
      .thenResolve(connection);

    await printerUnderTest('document');

    td.verify(connection.send('document'));
  })
})

var TESTS = require('../data/tests').TESTS

var TEST_MAP = {
  'past-life':     require('../data/tests/past-life'),
  'soul-color':    require('../data/tests/soul-color'),
  'worker-type':   require('../data/tests/worker-type'),
  'parallel-life': require('../data/tests/parallel-life'),
  'hidden-talent': require('../data/tests/hidden-talent'),
}

function getAllTests() {
  return TESTS
}

function getTestDetail(testId) {
  return TEST_MAP[testId] || null
}

module.exports = {
  getAllTests: getAllTests,
  getTestDetail: getTestDetail,
}

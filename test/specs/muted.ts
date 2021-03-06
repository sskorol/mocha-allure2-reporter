import { Status } from 'allure2-js-commons';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { cleanResults, findStatusDetails, findTest, runTests, whenResultsAppeared } from '../utils';

@suite
class MutedSuite {
  before() {
    cleanResults();
    runTests('muted');
  }

  @test
  shouldHaveMutedStatus() {
    const testName = 'shouldHighlightAsMuted';
    return whenResultsAppeared().then(() => {
      expect(findTest('Muted')).not.eq(undefined);
      expect(findTest(testName).status).eq(Status.PASSED);
      expect(findStatusDetails(testName, 'muted')).to.be.true;
    });
  }
}

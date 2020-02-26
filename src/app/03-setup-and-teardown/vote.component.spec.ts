import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Should increment totalVotes when upvoted ', () => {
    // Act
    component.upVote();

    // Assertion
    expect(component.totalVotes).toBe(1);
  });

  it('Should decrement totalVotes when downvotes ', () => {
    // Act
    component.downVote();

    // Assertion
    expect(component.totalVotes).toBe(-1);
  });
});

import dungeonDeck, { back } from './index';

describe('eventDeck content test', () => {
    it('eventDeck should have de correct number of cards ', () => {
        expect(dungeonDeck.length).toEqual(18);
    });
    it('event deck should have a back image ', () => {
        expect(back).toBeDefined();
    });
});

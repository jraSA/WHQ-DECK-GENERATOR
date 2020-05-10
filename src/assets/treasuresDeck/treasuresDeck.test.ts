import treasuresDeck, { back } from './index';

describe('eventDeck content test', () => {
    it('eventDeck should have de correct number of cards ', () => {
        expect(treasuresDeck.length).toEqual(30);
    });
    it('event deck should have a back image ', () => {
        expect(back).toBeDefined();
    });
});

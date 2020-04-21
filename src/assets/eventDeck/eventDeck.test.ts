import eventDeck, { back } from './index';

describe('eventDeck content test', () => {
    it('eventDeck should have de correct number of cards ', () => {
        expect(eventDeck.length).toEqual(19);
    });
    it('event deck should have a back image ', () => {
        expect(back).toBeDefined();
    });
});

import { FilterArtistsPipe } from './filter-artists.pipe';

describe('FilterArtistsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterArtistsPipe();
    expect(pipe).toBeTruthy();
  });
});

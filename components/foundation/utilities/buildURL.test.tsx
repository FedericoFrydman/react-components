import { buildURL } from './buildURL';

describe('Utilities - buildNavigateUrl', () => {
  it('returns URL with no search parameters', () => {
    const expectedUrl = 'https://www.example.com';
    const actualUrl = buildURL('https://www.example.com');
    expect(expectedUrl).toEqual(actualUrl);
  });

  it('returns URL with one search parameter', () => {
    const expectedUrl = 'https://www.example.com?foo=bar';
    const actualUrl = buildURL('https://www.example.com', 'foo=bar');
    expect(expectedUrl).toEqual(actualUrl);
  });

  it('returns URL with multiple search parameters as string', () => {
    const expectedUrl = 'https://www.example.com?foo=bar&e=mc2';
    const actualUrl = buildURL('https://www.example.com', 'foo=bar&e=mc2');
    expect(expectedUrl).toEqual(actualUrl);
  });

  it('returns URL with multiple search parameters as object pairs', () => {
    const expectedUrl = 'https://www.example.com?e=mc2&foo=bar&lang=en-us&water=cold';
    const actualUrl = buildURL('https://www.example.com', { e: 'mc2', foo: 'bar', lang: 'en-us', water: 'cold' });
    expect(expectedUrl).toEqual(actualUrl);
  });
});

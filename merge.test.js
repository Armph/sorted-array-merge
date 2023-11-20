const { merge } = require('./merge');
const { merge_fp } = require('./merge_fp');

it('Test Case #1', () => {
    const arr1 = [];
    const arr2 = [];
    const result = merge(arr1, arr2);
    const result2 = merge_fp(arr1, arr2);
    expect(result).toEqual([]);
    expect(result2).toEqual([]);
});

it('Test Case #2', () => {
    const arr1 = [];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    const result2 = merge_fp(arr1, arr2);
    expect(result).toEqual([2, 4, 6]);
    expect(result2).toEqual([2, 4, 6]);
});

it('Test Case #3', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [];
    const result = merge(arr1, arr2);
    const result2 = merge_fp(arr1, arr2);
    expect(result).toEqual([1, 3, 5]);
    expect(result2).toEqual([1, 3, 5]);
});

it('Test Case #4', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    const result2 = merge_fp(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    expect(result2).toEqual([1, 2, 3, 4, 5, 6]);
});

it('Test Case #5', () => {
    const arr1 = [1];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    const result2 = merge_fp(arr1, arr2);
    expect(result).toEqual([1, 2, 4, 6]);
    expect(result2).toEqual([1, 2, 4, 6]);
});

it('Test Case #6', () => {
    const arr1 = [1, 3, 5, 7, 9, 11, 13, 15];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    const result2 = merge_fp(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 11, 13, 15]);
    expect(result2).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 11, 13, 15]);
});

it('Test Case #7', () => {
    const arr1 = [-7, -5, -3, -1];
    const arr2 = [-6, -4, -2];
    const result = merge(arr1, arr2);
    const result2 = merge_fp(arr1, arr2);
    expect(result).toEqual([-7, -6, -5, -4, -3, -2, -1]);
    expect(result2).toEqual([-7, -6, -5, -4, -3, -2, -1]);
});

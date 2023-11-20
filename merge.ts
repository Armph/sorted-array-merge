function merge(collection_1: number[], collection_2: number[]): number[] {
    const merged: number[] = new Array(collection_1.length+collection_2.length);
    let i = 0;
    let j = 0;
    while (i < collection_1.length || j < collection_2.length) {
        if (collection_1[i] <= collection_2[j] || j === collection_2.length) {
            merged[i+j] = collection_1[i];
            i++;
        }
        else {
            merged[i+j] = collection_2[j];
            j++;
        }
    }
    return merged;
}

export { merge };
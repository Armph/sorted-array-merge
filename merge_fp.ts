function merge(collection_1: number[], collection_2: number[]): number[] {
    function merge(collection_1: number[], collection_2: number[], merged: number[]): number[] {
        if (!collection_1.length && !collection_2.length) {
            return merged;
        }
        if (!collection_1.length || collection_2[0] < collection_1[0]) {
            const val = collection_2.shift();
            if (val !== undefined) {
                merged.push(val);
            }
        }
        else {
            const val = collection_1.shift();
            if (val !== undefined) {
                merged.push(val);
            }
        } 
        return merge(collection_1, collection_2, merged);
    }
    return merge(collection_1, collection_2, []);
}

export { merge as merge_fp };
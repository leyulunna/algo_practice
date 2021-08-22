class TestArray {
    static contains(arr: number[], target: number): boolean{
        //const n = arr.length;
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] === target) {
                return true;
            }
        }
        return false;
    }

    static arrayCopy(arr: number[]): number[] {
        const newArr = new Array(arr.length);
        for (let i = 0; i < arr.length - 1; i++) {
            newArr[i] = arr[i];   
        }
        return newArr;
    }
}
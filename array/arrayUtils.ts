class ArrayUtils {
    static insertElement(src: number[], index: number, el: number): number[] {
        const des = new Array(src.length + 1);
        for (let i = 0; i < index; i++) {
            des[i] = src[i];
        }
        des[index] = el;
        for (let i = index; i < src.length; i++) {
            des[i + 1] = src[i];
        }
        return des;
    }

    static removeElement(src: number[], index: number): number[] {
        const des = new Array(src.length - 1);
        for (let i = 0; i < index; i++) {
            des[i] = src[i];
        }
        for (let i = index; i < des.length; i++) {
            des[i] = src[i + 1];
        }
        return des
    }
}
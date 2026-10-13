class StringHelper {
    format(inputText: string): string;
    format(inputText: string, repeatCount: number): string;

    format(inputText: string, repeatCount?: number): string {
        if (repeatCount !== undefined) {
            return inputText.repeat(repeatCount);
        }

        return inputText.toUpperCase();
    }
}

const stringHelperObject = new StringHelper();

console.log(stringHelperObject.format("hello"));
console.log(stringHelperObject.format("hello", 3));
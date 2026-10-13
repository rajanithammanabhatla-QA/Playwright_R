interface StorageBox<T> {
    boxValue: T;
}

const numberStorage: StorageBox<number> = {
    boxValue: 100
};

const stringStorage: StorageBox<string> = {
    boxValue: "Hello TypeScript"
};

console.log(numberStorage.boxValue);
console.log(stringStorage.boxValue);
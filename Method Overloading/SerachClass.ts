class SearchService {
    search(searchName: string): void;
    search(searchId: number): void;
    search(searchName: string, searchLocation: string): void;

    search(
        searchValue: string | number,
        searchLocation?: string
    ): void {

        if (typeof searchValue === "number") {
            console.log(`Searching by ID: ${searchValue}`);
        } else if (searchLocation !== undefined) {
            console.log(
                `Searching ${searchValue} in ${searchLocation}`
            );
        } else {
            console.log(`Searching by name: ${searchValue}`);
        }
    }
}

const searchServiceObject = new SearchService();

searchServiceObject.search("Rajani");
searchServiceObject.search(101);
searchServiceObject.search("Rajani", "Hyderabad");
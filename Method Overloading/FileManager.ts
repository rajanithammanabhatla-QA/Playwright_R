class FileManager {
    upload(documentName: string): void;
    upload(documentName: string, documentSize: number): void;
    upload(
        documentName: string,
        documentSize: number,
        documentType: string
    ): void;

    upload(
        documentName: string,
        documentSize?: number,
        documentType?: string
    ): void {

        if (documentSize !== undefined && documentType !== undefined) {
            console.log(
                `Uploaded ${documentName}, Size: ${documentSize}MB, Type: ${documentType}`
            );
        } else if (documentSize !== undefined) {
            console.log(
                `Uploaded ${documentName}, Size: ${documentSize}MB`
            );
        } else {
            console.log(`Uploaded ${documentName}`);
        }
    }
}

const fileManagerObject = new FileManager();

fileManagerObject.upload("resume.pdf");
fileManagerObject.upload("resume.pdf", 2);
fileManagerObject.upload("resume.pdf", 2, "PDF");
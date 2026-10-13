class MessageService {
    send(messageText: string): void;
    send(messageText: string, imageFile: string): void;
    send(
        messageText: string,
        imageFile: string,
        videoFile: string
    ): void;

    send(
        messageText: string,
        imageFile?: string,
        videoFile?: string
    ): void {

        if (imageFile !== undefined && videoFile !== undefined) {
            console.log(
                `Message: ${messageText}, Image: ${imageFile}, Video: ${videoFile}`
            );
        } else if (imageFile !== undefined) {
            console.log(
                `Message: ${messageText}, Image: ${imageFile}`
            );
        } else {
            console.log(`Message: ${messageText}`);
        }
    }
}

const messageServiceObject = new MessageService();

messageServiceObject.send("Hello");
messageServiceObject.send("Hello", "photo.png");
messageServiceObject.send("Hello", "photo.png", "video.mp4");
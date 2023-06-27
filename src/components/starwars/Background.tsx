import Image from "next/image";

export default function Background() {
    return (
        <Image
            src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Star-Wars-Backgrounds.jpg"
            fill
            alt="background"
            className="-z-50 opacity-30 object-cover"
        />
    );
}

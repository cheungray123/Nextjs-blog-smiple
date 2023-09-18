import Image from "next/image";
import Card from "../wrapper/Card";
const Photo = () => {
    return (
        <Card className="!p-0">
            <Image
                src={'/blog-placeholder-5.jpg'}
                alt='my'
                width={100}
                height={100}
                className='w-full h-full'
            />
        </Card>
    )
}
export default Photo;

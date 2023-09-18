import Image from "next/image";
import Card from "../wrapper/Card";
import { SITE } from "@/site.config";

const Matadata = () => {
    return (
        <Card className="col-span-2 row-span-2 !p-0">
            <div className='w-full h-full'>
		<div className='flex justify-between p-5 h-1/2'>
			<div className='relative'>
					<Image
					src='/config/E340.svg'
					alt={SITE.TITLE}
					width={42}
					height={42}
					className='rounded-lg'
					/>
				<h2 className='text-xl font-extrabold my-2'>{SITE.TITLE}</h2>
				<p className='text-sm text-neutral-600'>{SITE.AUTHOR}</p>
			</div>
			<div className='grid grid-cols-2 w-1/2'>
				<div>
					<h3 className='text-base font-extrabold'>10</h3>
					<p className='text-sm'>Post</p>
				</div>
				<div>
					<h3 className='text-base font-extrabold'>
						20
					</h3>
					<p className='text-sm'>Categorie</p>
				</div>
				<div>
					<h3 className='text-base font-extrabold'>
						30
					</h3>
					<p className='text-sm'>Tags</p>
				</div>
				<div>
					<h3 className='text-base font-extrabold'>
						3天前
					</h3>
					<p className='text-sm'>Last updated</p>
				</div>
			</div>
		</div>
		<div className="w-full h-1/2">
			<Image
			src={'/config/blog-placeholder-2.jpg'}
			alt={SITE.TITLE}
			width={200}
			height={190}
            priority={false}
			className='w-full h-full object-cover object-center'
		/>
		</div>
		
	</div>
        </Card>
    )
}
export default Matadata;
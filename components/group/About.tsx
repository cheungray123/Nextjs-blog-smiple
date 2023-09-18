import { AUTHOR } from "@/site.config";
import Card from "../wrapper/Card";
import Image from "next/image";

const Me = () => {
	return (
		<Card className="row-span-2">
			<a
				href='/about'
				className='h-full flex flex-col justify-between'>
				<Image
					src={AUTHOR.AVATAR}
					alt={AUTHOR.NAME}
					width={48}
					height={48}
					className='rounded-full'
				/>
				<div>
					<h2 className='text-lg font-extrabold'>{AUTHOR.NAME}</h2>
					<p className='text-sm text-neutral-700 mt-2'>{AUTHOR.SLOGEN}</p>
				</div>
			</a>
		</Card>
	)
}
export default Me;


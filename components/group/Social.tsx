import { SOCIAL } from "@/site.config"
import Card from "../wrapper/Card"

const Github = () => {
	return (
		<Card className="row-span-1">
			<a
				href={SOCIAL[0].URL}
				className='w-full h-full flex flex-col justify-between'>
				<span
					className='block w-6 h-6'
					dangerouslySetInnerHTML={{
						__html: SOCIAL[0].ICON || '',
					}}
				/>
				<p>{SOCIAL[0].TITLE}</p>
			</a>
		</Card>

	)
}
export default Github

import clsx from "clsx";
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={clsx(className, "duration-300 ease-[cubic-bezier(.33,1.61,0,.83)] p-4 rounded-xl overflow-hidden  border-2 border-neutral-100 hover:border-transparent borde")}>
            {children}
        </div>
    )
}
export default Card;
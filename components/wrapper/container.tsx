import clsx from "clsx";

const Container = ({ children,className,grid }: { children: React.ReactNode,className?: string,grid?:boolean }) =>{
    return (
        <section className={clsx('w-full p-2 gap-5',className,`${grid && "grid grid-cols-4 grid-flow-row-dense"}`)}>
            {children}
        </section>
    )
}
export default Container;
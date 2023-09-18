"use client"
import { AUTHOR, SITE } from "@/site.config";
import Image from "next/image";
import { useRef } from "react";
import NavItems from "./nav";
const HeadTop = (props: any) => {
    return (
        <div className="w-[80vw] lg:w-80 h-8 flex items-center justify-between transition-all duration-200 ease-[cubic-bezier(.33,1.61,0,.83)] group/tool group-[.open]:lg:w-[460px]">
            <div className="relative w-3/4">
                <a href="/" className="block w-fit">
                    <Image
                        src={AUTHOR.AVATAR}
                        alt={SITE.TITLE}
                        height={32}
                        width={32}
                        className='object-cover rounded-full group-hover/tool:rotate-45 transition'
                    />
                </a>
                <div className="absolute left-10 top-0 h-full text-white mix-blend-difference overflow-hidden">
                    <span className="block w-fit h-full leading-8 group-hover/tool:-translate-y-full transition">{SITE.TITLE}</span>
                    <span className="block w-fit h-full leading-8 group-hover/tool:-translate-y-full transition">MENU</span>
                </div>
            </div>
            <div className="w-12 h-6 rounded-full bg-neutral-100">
                <button type="button"
                    {...props}
                    className="w-full h-full flex flex-col items-center justify-center gap-1 group/button">
                    <span className="block w-4 h-[2px] bg-neutral-950 origin-center transition group-hover/button:rotate-90 group-hover/button:translate-y-[3px] group-[.open]:hidden"></span>
                    <span className="block w-4 h-[2px] bg-neutral-950 origin-center transition  group-hover/button:-translate-y-[3px] group-[.open]:translate-y-0"></span>
                </button>
            </div>
        </div>
    )
}
const Header = () => {
    const headerRef = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        if (headerRef.current) {
            headerRef.current.classList.toggle('open');
        }
    };
    return (
        <header ref={headerRef} className="fixed z-50 bottom-2 left-1/2 -translate-x-1/2 group">
            <div className="w-fit p-2 rounded-full bg-neutral-950 transition group-[.open]:rounded-2xl">
                <HeadTop onClick={handleClick} />
                <NavItems />
            </div>
        </header>
    )
}

export default Header;
import Image, { ImageProps } from 'next/image';
import type { MDXComponents } from 'mdx/types';
import clsx from 'clsx';

export const mdxComponents: MDXComponents = {
    h1: ({ children, ...props }) => (
        <h1 className={clsx('font-mono text-2xl sm:text-3xl md:text-4xl', `${props.className}`)} {...props}>
            {children}
        </h1>
    ),
    h2: ({ children, ...props }) => (
        <h2 className={clsx('font-mono text-lg sm:text-xl md:text-2xl', `${props.className}`)} {...props}>
            {children}
        </h2>
    ),
    p: ({ children, ...props }) => (
        <p className={clsx('text-sm/5 sm:text-base',`${props.className}`)} {...props}>
            {children}
        </p>
    ),
    Image: (props: ImageProps) => <Image {...props} />,
};
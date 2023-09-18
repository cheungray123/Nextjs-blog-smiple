import { Parent } from 'unist'
import { visit } from 'unist-util-visit'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'

export default function remarkTocHeadings(options: any) {  
    return (tree: Parent) =>  
        visit(tree, 'heading', (node: any) => {  
            const textContent = toString(node);  
            options.exportRef.push({  
                text: textContent,  
                url: '#' + slug(textContent),  
                depth: node.depth,  
            });  
        });  
}
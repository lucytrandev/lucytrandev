// app/projects/[slug]/MDXDisplay.tsx
"use client";

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MDXDisplayProps {
    source: MDXRemoteSerializeResult;
}

const MDXDisplay: React.FC<MDXDisplayProps> = ({ source }) => {
    return <MDXRemote {...source} />;
};

export default MDXDisplay;
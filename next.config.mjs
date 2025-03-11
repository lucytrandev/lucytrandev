// next.config.mjs
import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const baseConfig = {
    // Support MDX files in pages directory:
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

    // Add other Next.js config options here if needed
    // e.g., reactStrictMode: true,
};

const mdx = withMDX({
    extension: /\.mdx?$/,
});

export default mdx(baseConfig);

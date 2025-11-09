import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { HTMLAttributes } from 'react';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export function MDXContent({ source }: MDXContentProps) {
  const components = {
    h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="mt-12 text-3xl font-semibold text-foreground" {...props} />
    ),
    p: (props: HTMLAttributes<HTMLParagraphElement>) => (
      <p className="mt-6 text-lg leading-relaxed text-neutral" {...props} />
    ),
    ul: (props: HTMLAttributes<HTMLUListElement>) => (
      <ul className="mt-6 list-disc space-y-2 pl-5 text-neutral" {...props} />
    )
  };

  return <MDXRemote source={source} components={components} />;
}

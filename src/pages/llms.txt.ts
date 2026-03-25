import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# calóh

calóh is a one-person design and engineering studio based in Barcelona, Spain.
Led by Quino Terrasa (https://oxejoq.eu).

## About
We craft digital products that feel warm, work quietly, and respect your data.

## Services
- Full-stack development
- Product engineering
- AI integration

## Contact
calohstudio@pm.me

## Location
Barcelona, Spain (CET/CEST — Europe/Madrid)

## Website
https://calohco.github.io
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

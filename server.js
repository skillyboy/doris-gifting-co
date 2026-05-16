import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { createReadStream, existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const port = Number(process.env.PORT) || 4173;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const cleaned = normalize(decoded).replace(/^([/\\.]+)+/, '');
  return join(distDir, cleaned || 'index.html');
}

const server = createServer(async (req, res) => {
  try {
    const requested = safePath(req.url || '/');
    const filePath = existsSync(requested) ? requested : join(distDir, 'index.html');
    const ext = extname(filePath).toLowerCase();

    res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
    if (ext === '.html') {
      res.setHeader('Cache-Control', 'no-store');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }

    createReadStream(filePath)
      .on('error', async () => {
        res.statusCode = 404;
        res.end('Not found');
      })
      .pipe(res);
  } catch {
    res.statusCode = 500;
    res.end('Server error');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Doris Gifting Co. listening on port ${port}`);
});

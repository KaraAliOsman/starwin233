import { NextResponse } from 'next/server';
import { z } from 'zod';
import { calculatePricing } from '../../../lib/pricing';

const requestSchema = z.object({
  ancho_mm: z.number().min(400).max(4000),
  alto_mm: z.number().min(400).max(3500),
  apertura: z.enum(['abatible', 'corredera', 'proyectante', 'oscilobatiente']),
  vidrio: z.enum(['4-12-4', '4-16-4', 'lowe', 'laminado']),
  color: z.enum(['blanco', 'antracita', 'winchester', 'roble']),
  cantidad: z.number().min(1).max(100),
  instalacion: z.boolean(),
  comuna: z.string().min(2)
});

const rateLimit = new Map<string, { count: number; timestamp: number }>();
const LIMIT = 30;
const WINDOW = 60 * 1000;

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (entry && now - entry.timestamp < WINDOW) {
    if (entry.count >= LIMIT) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
    entry.count += 1;
    rateLimit.set(ip, entry);
  } else {
    rateLimit.set(ip, { count: 1, timestamp: now });
  }

  const payload = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const result = calculatePricing(parsed.data);
  return NextResponse.json(result, {
    headers: {
      'Cache-Control': 'no-store'
    }
  });
}

import { NextResponse } from 'next/server';import { risks } from '@/lib/data';
export async function GET(){const csv=['ref,title,category,score,links',...risks.map(r=>`${r.ref},${r.title},${r.category},${r.score},controls:${r.links.controls}`)].join('\n');return new NextResponse(csv,{headers:{'content-type':'text/csv','content-disposition':'attachment; filename="risks.csv"'}})}

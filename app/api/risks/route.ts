import { NextResponse } from 'next/server';import { z } from 'zod';import { risks } from '@/lib/data';
const RiskMutation=z.object({title:z.string().min(3),category:z.string(),status:z.string()});
export async function GET(){return NextResponse.json(risks)}
export async function POST(req:Request){const body=RiskMutation.parse(await req.json());return NextResponse.json({audit:{actor:'admin@rapyd.net',action:'create',entityType:'Risk'},risk:{ref:'R-NEW',...body}},{status:201})}

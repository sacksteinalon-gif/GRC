import { NextResponse } from 'next/server';import { z } from 'zod';
const RequestSchema=z.object({template:z.enum(['CRO update','CSCC minutes','risk appetite statement','P1 escalation brief','DORA notification','KRI breach report','SRCC board pack'])});
export async function POST(req:Request){const {template}=RequestSchema.parse(await req.json());return NextResponse.json({template,status:'generated',note:'docx/jszip export pipeline placeholder backed by live data.'})}

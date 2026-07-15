import { Card } from '@/components/ui/card';import { Badge } from '@/components/ui/badge';
export function StatCard({label,value,accent='bg-purple-500'}:{label:string;value:string|number;accent?:string}){return <Card className="rail"><div className="text-sm text-slate-500">{label}</div><div className="anton mt-2 text-4xl">{value}</div></Card>}
export const StatCardGrid=({children}:{children:React.ReactNode})=><div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">{children}</div>;
export function FilterChips({items}:{items:string[]}){return <div className="flex flex-wrap gap-2">{items.map(i=><a key={i} href={`?filter=${i}`} className="rounded-full border px-3 py-1 text-sm hover:bg-purple-50">{i}</a>)}</div>}
export function SectionCard({title,children}:{title:string;children:React.ReactNode}){return <Card><h2 className="mb-4 text-lg font-bold">{title}</h2>{children}</Card>}
export function EmptyState({title}:{title:string}){return <div className="rounded-xl border border-dashed p-8 text-center text-slate-500">{title}</div>}
export function Links({links}:{links:Record<string,number>}){return <div className="flex flex-wrap gap-1">{Object.entries(links).map(([k,v])=><Badge key={k}>{v} {k}</Badge>)}</div>}

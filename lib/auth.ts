import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
export const { handlers, signIn, signOut, auth } = NextAuth({ providers:[Credentials({credentials:{email:{},password:{}},async authorize(c){return {id:'demo-admin',email:String(c?.email||'admin@rapyd.net'),name:'GRC Admin',role:'ADMIN'} as any}})], pages:{signIn:'/login'}, session:{strategy:'jwt'}, callbacks:{jwt({token,user}){if(user) token.role=(user as any).role; return token},session({session,token}){(session.user as any).role=token.role; return session}}});

import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'

 
export async function GET(req: Request) {



    return new Response( JSON.stringify( {a:'a'} ) , { status: 200 });

    

}
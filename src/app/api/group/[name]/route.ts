import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'
import GroupModel from '../../../../models/GroupModel';

 
export async function GET(req: Request) {

    const groups = await GroupModel.get()

    return new Response( JSON.stringify( groups ) , { status: 200 });

}
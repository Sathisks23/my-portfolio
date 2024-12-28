const { NextResponse } = require("next/server");

export async function GET(){
    const response  = NextResponse.json({
        message:'Successfully login'
    })

    response.cookies.set('token','',{
        httpOnly:true,expires: new Date(0)
    })  
    return response
}
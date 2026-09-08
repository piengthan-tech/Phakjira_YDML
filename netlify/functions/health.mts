declare const Netlify:{env:{get(name:string):string|undefined}};
export default async()=>new Response(JSON.stringify({ok:true,service:'YDML Web Assistant',make_configured:Boolean(Netlify.env.get('MAKE_WEBHOOK_URL')),gemini_fallback_configured:Boolean(Netlify.env.get('GEMINI_API_KEY'))}),{headers:{'Content-Type':'application/json; charset=utf-8'}});
export const config={path:'/health'};
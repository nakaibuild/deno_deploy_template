import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { main } from "./build/dev/javascript/deno_deploy_template/dist/deno_deploy_template.mjs";

function handler(req) {
	return new Response(main(), {
		headers: { "content-type": "text/html" },
	});
}

console.log("Listening on http://localhost:8000");
await serve(handler);

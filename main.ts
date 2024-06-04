//if deno
import { Hono } from "npm:hono";

//if nodejs
//import { Hono } from "hono";



const app = new Hono();

app.all("*", serveStatic({ root: "*" }));
//
Deno.serve(app.fetch);
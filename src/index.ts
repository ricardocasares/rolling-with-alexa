import { json } from "micro";
import { handler } from "./skill";
import { RequestEnvelope } from "ask-sdk-model";

export default async function(req) {
  const event = await parse(req);

  return new Promise((resolve, reject) =>
    handler(event, null, (err, data) => {
      if (err) return reject(err);

      return resolve(data);
    })
  ).catch(console.log);
}

async function parse(req): Promise<RequestEnvelope> {
  const request = await json(req);

  return request as RequestEnvelope;
}

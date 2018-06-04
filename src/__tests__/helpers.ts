import { handler } from "../skill";

export function skill(event) {
  return new Promise((resolve, reject) => {
    return handler(event, null, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  }).catch(console.log);
}

export function ssml(pattern) {
  return {
    response: {
      outputSpeech: {
        ssml: expect.stringMatching(pattern)
      }
    }
  };
}

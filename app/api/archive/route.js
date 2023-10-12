import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function POST() {
  exec('zip -r ./archives/archive_$(date +%Y-%m-%d_%H-%M-%S).zip ./data/*', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
    }
      console.log(stdout);
      console.log(stderr);
  });
  return new Response(
    JSON.stringify(
      {message: 'Files were sent to archive'}
    ),
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
}

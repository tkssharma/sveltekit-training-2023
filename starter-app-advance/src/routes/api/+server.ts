import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const photos = await response.json()

  return new Response(JSON.stringify(photos), { status: 200 })
}
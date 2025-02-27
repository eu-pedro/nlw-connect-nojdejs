import z from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getRanking } from '../functions/get-ranking'

export const getRankingRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/ranking',
    {
      schema: {
        summary: 'Get ranking',
        tags: ['referral'],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string(),
                score: z.number(),
                email: z.string(),
              }),
            ),
          }),
        },
      },
    },
    async () => {
      const { rankingWithScore } = await getRanking()

      return {
        ranking: rankingWithScore,
      }
    },
  )
}

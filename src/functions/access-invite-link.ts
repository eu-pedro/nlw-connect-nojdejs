import { redis } from '../redis/client'

interface AccessInviteLinkEventParams {
  subscriberId: string
}

export async function accessInviteLinkEvent({
  subscriberId,
}: AccessInviteLinkEventParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}

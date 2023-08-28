import { getUserByClerkID } from '@/utils/auth'
import { qa } from '@/utils/ai'
import { NextResponse } from 'next/server'

export const POST = async (request) => {
  const { question } = await request.json()
  const user = await getUserByClerkID()

  const entires = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      content: true,
      createdAt: true,
    },
  })
  const answer = await qa(question, entires)
  return NextResponse.json({ data: answer })
}

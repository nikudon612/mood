import { prisma } from '@/utils/db'
import { auth, currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()
  // const { userId } = await auth()
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  })
  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress as string,
      },
    })
  }
  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser

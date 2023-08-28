import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />
    </div>
  )
}

export default SignUpPage

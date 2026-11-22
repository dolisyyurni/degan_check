import React from 'react'
import { CardTitle, Card, CardHeader, CardContent } from './ui/card';
import Logo from './Logo';
import { SignInButton } from '@clerk/nextjs';
import { Button } from './ui/button';

const NoAccess = ({details="Log in to view your cart items and checkout. Don't miss out your favorite products!"}:{details?: string}) => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4">
        <Card className="w-full max-w-md">
            <CardHeader className="flex items-center flex-col">
                <Logo />
                <CardTitle className="text-2xl font-bold">
                    Welcome Back!
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-center font-medium text-darkColor/80">
                    {details}
                </p>
            </CardContent>

            <SignInButton>
                <Button>Sign in</Button>
            </SignInButton>
        </Card>
    </div>
  )
}

export default NoAccess
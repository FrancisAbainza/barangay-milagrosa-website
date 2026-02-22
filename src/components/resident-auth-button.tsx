"use client";

import { useState } from "react";
import { ResidentLoginForm } from "./resident-login-form";
import { ResidentSignupForm } from "./resident-signup-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { User } from "lucide-react";

export default function ResidentAuthButton() {
  const [open, setOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  function handleOpenChange(value: boolean) {
    setOpen(value);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="w-full cursor-pointer border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto px-8"
        >
          <User />
          I am a Resident
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>{isSignup ? "Create an Account" : "Welcome Back"}</DialogTitle>
          <DialogDescription>
            {isSignup
              ? "Fill in the details below to create your resident account"
              : "Enter your credentials to access your resident account"}
          </DialogDescription>
        </DialogHeader>
        {isSignup ? (
          <ResidentSignupForm onSuccess={() => handleOpenChange(false)} />
        ) : (
          <ResidentLoginForm onSuccess={() => handleOpenChange(false)} />
        )}
        <p className="text-center text-sm text-muted-foreground">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(false)}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(true)}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Create one
              </button>
            </>
          )}
        </p>
      </DialogContent>
    </Dialog>
  );
}
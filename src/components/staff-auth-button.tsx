"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { UserCog } from "lucide-react";

export default function StaffAuthButton() {
  const [open, setOpen] = useState(false);
  const { loginStaff } = useAuth();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="w-full cursor-pointer border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto px-8"
        >
          <UserCog />
          I am a Staff
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Welcome Back</DialogTitle>
          <DialogDescription>
            Enter your credentials to access your staff account
          </DialogDescription>
        </DialogHeader>
        <LoginForm onLogin={loginStaff} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
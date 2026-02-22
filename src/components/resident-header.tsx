'use client';

import { useAuth } from "@/contexts/auth-context";
import { LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResidentHeader() {
  const { logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo & Barangay Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Republic of the Philippines
            </p>
            <p className="text-sm font-bold leading-tight text-foreground">
              Barangay Milagrosa
            </p>
          </div>
        </div>

        {/* Logout */}
        <Button variant="ghost" size="sm" onClick={logout} className="gap-2 text-muted-foreground hover:text-destructive cursor-pointer">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1> hello world</h1>
      <Button variant="ghost">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Click me!
      </Button>
    </div>
  );
}

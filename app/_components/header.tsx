import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navs = ["Condos", "Houses", "Commercial", "For rent", "About", "Contact"];

export function Header() {
  return (
    <header className="flex justify-between px-6 py-10 bg-transparent fixed top-0 z-10 w-full">
      <div className="text-3xl">logo</div>
      <nav>
        <ul className="flex gap-6">
          {navs.map((n) => (
            <li>{n}</li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-20 border border-black">
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent className="z-20">
            <SelectGroup>
              <SelectItem value="apple">USD</SelectItem>
              <SelectItem value="banana">RWF</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button>Log in</Button>
      </div>
    </header>
  );
}

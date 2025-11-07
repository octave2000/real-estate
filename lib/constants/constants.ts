import { Bed, DollarSign, House, Locate, Settings } from "lucide-react";

export const navs = [
  "Condos",
  "Houses",
  "Commercial",
  "For rent",
  "About",
  "Contact",
];

export const filters = [
  {
    icon: Locate,
    name: "Location",
  },
  {
    icon: House,
    name: "Property type",
  },
  {
    icon: DollarSign,
    name: "Price",
  },
  {
    icon: Bed,
    name: "Bed rooms",
  },
  {
    icon: Settings,
    name: "More",
  },
];

export interface Data {
  user: User;
  plan: Plan;
  addOns: AddOn[];
}

export interface User {
  name: string;
  email: string;
  phone: string;
}

export interface Plan {
  name: "Arcade" | "Advanced" | "Pro";
  isMonthly: boolean;
  price: number;
}

export interface AddOn {
  name: string;
  price: number;
}

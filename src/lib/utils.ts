import { SUPPORTED_CHAIN } from "@/context/Web3Modal";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isSupportedChain = (chainId: number | string) =>
  Number(chainId) === SUPPORTED_CHAIN;

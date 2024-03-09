"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
export const SUPPORTED_CHAIN = 11155111;

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;

// 2. Set chains
const sepolia = {
  chainId: SUPPORTED_CHAIN,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL!,
};

// 3. Create modal

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [sepolia],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children;
}

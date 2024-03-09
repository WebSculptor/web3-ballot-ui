import { ethers } from "ethers";
import ABI from "./abi.json";
import { ethers } from "ethers";

// read only provider pointing to sepolia. It allows read only access to the sepolia blockchain
export const readOnlyProvider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_RPC_URL
);

// read/write provider, that allows you to read data and also sign transaction on whatever chain it's pointing to
export const getProvider = (provider) => new ethers.BrowserProvider(provider);

export const getProposalsContract = (providerOrSigner) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    ABI,
    providerOrSigner
  );

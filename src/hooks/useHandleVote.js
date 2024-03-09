import { useCallback } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getProposalsContract } from "../constants/contracts";
import toast from "react-hot-toast";

const useHandleVote = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(
    async (id) => {
      if (!isSupportedChain(chainId)) return toast.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const contract = getProposalsContract(signer);

      try {
        const transaction = await contract.vote(id);
        toast.success("Transaction Successful");
        console.log("transaction: ", transaction);

        const receipt = await transaction.wait();
        toast.success("Receipt generated");
        console.log("receipt: ", receipt);

        if (receipt.status) {
          return toast.success("Vote successfully!");
        }

        toast.error("Vote failed!");
      } catch (error) {
        if (error.reason === "Has no right to vote") {
          toast.error("You have not right to vote");
        } else if (error.reason === "Already voted.") {
          toast.error("You have already voted");
        } else {
          toast.error("An unknown error occured");
        }

        console.error("error: ", error);
      }
    },
    [chainId, walletProvider]
  );
};

export default useHandleVote;

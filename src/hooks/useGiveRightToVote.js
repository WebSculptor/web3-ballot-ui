import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { isAddress } from "ethers";
import { getProvider } from "../constants/providers";
import { getProposalsContract } from "../constants/contracts";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";

const useGiveRightToVote = (address) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return toast.error("Wrong network");
    if (!isAddress(address)) return toast.error("Invalid address");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getProposalsContract(signer);

    try {
      const estimatedGas = await contract.giveRightToVote.estimateGas(address);

      const transaction = await contract.giveRightToVote(address, {
        gasLimit: estimatedGas,
      });
      toast.success("Transaction successfull");
      console.log("transaction: ", transaction);

      const receipt = await transaction.wait();
      toast.success("Receipt generated");

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return toast.success("Successfully given  right to vote!");
      }

      toast.error("Failed to give right to vote!");
    } catch (error) {
      console.error("error: ", error);
    }
  }, [address, chainId, walletProvider]);
};

export default useGiveRightToVote;

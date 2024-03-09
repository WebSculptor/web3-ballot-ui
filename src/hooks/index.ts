import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

const useIsChairPerson = () => {
  const { address } = useWeb3ModalAccount();

  return address == process.env.NEXT_PUBLIC_OWNER_ADDRESS;
};

export default useIsChairPerson;

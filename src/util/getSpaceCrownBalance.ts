import { ethers, formatUnits } from "ethers";

const  getSpaceCrownBalance = async (wallet: string) => {
    const ABI = [
        "function balanceOf(address account) public view returns (uint256)",
        // "function decimals() public view virtual override returns (uint8)"
    ];
    const decimals = 18;
    const provider = new ethers.JsonRpcProvider('https://binance.llamarpc.com');
    const contract = new ethers.Contract('0xb2ea51BAa12C461327d12A2069d47b30e680b69D', ABI, provider);
    return formatUnits(await contract.balanceOf(wallet), decimals);
}
export default getSpaceCrownBalance;

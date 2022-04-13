import * as conf from "../config";
import { task } from "hardhat/config";

task("transferFrom", "Transfer from")
    .addParam("from", "Who's gonna send the money")
    .addParam("to", "Who's gonna receive the money")
    .addParam("value", "Amount of money")
    .setAction(async (taskArgs, { ethers }) => {
    let ERC20 = await ethers.getContractAt("ERC20", conf.CONTRACT_ADDRESS);
    await ERC20.transferFrom(taskArgs.from, taskArgs.to, taskArgs.value);
  });
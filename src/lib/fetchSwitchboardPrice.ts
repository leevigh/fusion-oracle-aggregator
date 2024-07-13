import axios from "axios";
import { SymbolType, priceIds } from "@/lib/constants";
// import { FetchPriceResponse, SwitchboardResponse } from "@/types";

// /**
//  * Fetches the price of a symbol from the Switchboard network.
//  *
//  * @param {string} symbol - The symbol to fetch the price for.
//  * @returns {Promise<number | undefined>} - A promise that resolves to the price of the symbol or undefined if not available.
//  * @throws {Error} - Throws an error if the symbol is unsupported.
//  */
export async function fetchSwitchboardPrice(symbol: SymbolType) {

  const switchboardId = priceIds[symbol].switchboard;

  if (!switchboardId) throw new Error(`${symbol} does not exist`);

  try {
    const response = await axios.get(`https://crossbar.switchboard.xyz/simulate/${switchboardId}`)

    if (!response.data) {
      return;
    }

    return Number(response.data[0].results[0]);
  } catch (error: any) {
    console.error(`Failed to fetch Switchboard price for ${symbol}`, error);
  }
}

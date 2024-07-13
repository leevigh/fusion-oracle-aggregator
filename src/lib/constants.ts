import { PriceServiceConnection as PythConnection } from "@pythnetwork/price-service-client";

export const connection = new PythConnection("https://hermes.pyth.network");

export type SymbolType = (typeof symbols)[number];
type PriceIdsType = Record<string, SymbolData>;

interface SymbolData {
  pyth: string;
  switchboard: string;
};


export const symbols = [
  "SOL/USD",
  "BTC/USD",
  "RAY/USD",
  "JUP/USD",
  "DRIFT/USD",
];


export const priceIds: PriceIdsType = {
  "SOL/USD": {
    pyth: "ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
    switchboard:
      "0xda11e2f7cc293f3c133a2662c70d261a03158f1c7ac32079b9bd089e81abcabb",
  },
  "BTC/USD": {
    pyth: "e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
    switchboard:
      "0xe2ba292a366ff6138ea8b66b12e49e74243816ad4edd333884acedcd0e0c2e9d",
  },
  "JUP/USD": {
    pyth: "0a0408d619e9380abad35060f9192039ed5042fa6f82301d0e48bb52be830996",
    switchboard:
      "0x7d15fea6a51307c78d6f3c2262c12bfdea3d034c431f3fa5c0d46c897de15853",
  },
  "DRIFT/USD": {
    pyth: "0x5c1690b27bb02446db17cdda13ccc2c1d609ad6d2ef5bf4983a85ea8b6f19d07",
    switchboard:
      "0x0de0c58c94708cd549d16a18f8df32ad886afd56121352c66a9b96e006294840",
  },
  "RAY/USD": {
    pyth: "91568baa8beb53db23eb3fb7f22c6e8bd303d103919e19733f2bb642d3e7987a",
    switchboard:
      "0x9c8f96e0ea1ae24d80941791df56fb017303db0373df44f14372a2700946f3e1",
  },
};

import { hotProvider, initHotProvider, logo } from "./adapter/evm";
import { HotWalletAdapter as SolanaHotWalletAdapter } from "./adapter/solana";
import { setupHotWallet } from "./adapter/near";
import "./adapter/ton";

export { AuthPayload, authPayloadSchema, verifySignature } from "./helpers/nep0314";
export { SolanaHotWalletAdapter, hotProvider };
export { setupHotWallet, initHotProvider };
export { logo as hotWalletLogo };

export type { HotRequest, HotResponse, InjectedState } from "./helpers/types";
export { default as HOT, RequestFailed } from "./hot";

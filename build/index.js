import { hotProvider, initHotProvider, logo } from "./adapter/evm.js";
import { HotWalletAdapter as SolanaHotWalletAdapter } from "./adapter/solana.js";
import { setupHotWallet } from "./adapter/near.js";
import "./adapter/ton.js";
export { AuthPayload, authPayloadSchema, verifySignature } from "./helpers/nep0314.js";
export { SolanaHotWalletAdapter, hotProvider };
export { setupHotWallet, initHotProvider };
export { logo as hotWalletLogo };
export { default as HOT, RequestFailed } from "./hot.js";
//# sourceMappingURL=index.js.map
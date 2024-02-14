// Aba has modified this file.
import { WalletType } from '@chia-network/api';
import type { Wallet } from '@chia-network/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'Aba';
    default:
      return wallet.meta?.name ?? wallet.name;
  }
}

import React from "react";

import { SigningCosmosClient } from "@cosmjs/launchpad";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

import {
  assertIsBroadcastTxSuccess,
  SigningStargateClient,
} from "@cosmjs/stargate";

import { useEffect } from "react";

function Connect(props) {
  useEffect(() => {
    if (!window.getOfflineSigner || !window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "cosmoshub-4";

      // Enabling before using the Keplr is recommended.
      // This method will ask the user whether to allow access if they haven't visited this website.
      // Also, it will request that the user unlock the wallet if the wallet is locked.
      window.keplr.enable(chainId).then(() => {
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        offlineSigner.getAccounts().then((accounts) => {
          console.log(accounts);
          const cosmJS = new SigningCosmosClient(
            "https://lcd-cosmoshub.keplr.app",
            accounts[0].address,
            offlineSigner
          );
        });
      });

      // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    }
  }, []);

  return <div>Connect</div>;
}

export default Connect;

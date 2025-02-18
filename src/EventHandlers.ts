/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  FlatMoneyVault,
  FlatMoneyVault_FundingFeesSettled,
  FlatMoneyVault_Initialized,
  FlatMoneyVault_OwnershipTransferred,
} from "generated";

FlatMoneyVault.FundingFeesSettled.handler(async ({ event, context }) => {
  const entity: FlatMoneyVault_FundingFeesSettled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    settledFundingFee: event.params.settledFundingFee,
  };

  context.FlatMoneyVault_FundingFeesSettled.set(entity);
});

FlatMoneyVault.Initialized.handler(async ({ event, context }) => {
  const entity: FlatMoneyVault_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.FlatMoneyVault_Initialized.set(entity);
});

FlatMoneyVault.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: FlatMoneyVault_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.FlatMoneyVault_OwnershipTransferred.set(entity);
});

import assert from "assert";
import { 
  TestHelpers,
  FlatMoneyVault_FundingFeesSettled
} from "generated";
const { MockDb, FlatMoneyVault } = TestHelpers;

describe("FlatMoneyVault contract FundingFeesSettled event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for FlatMoneyVault contract FundingFeesSettled event
  const event = FlatMoneyVault.FundingFeesSettled.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("FlatMoneyVault_FundingFeesSettled is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await FlatMoneyVault.FundingFeesSettled.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualFlatMoneyVaultFundingFeesSettled = mockDbUpdated.entities.FlatMoneyVault_FundingFeesSettled.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedFlatMoneyVaultFundingFeesSettled: FlatMoneyVault_FundingFeesSettled = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      settledFundingFee: event.params.settledFundingFee,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualFlatMoneyVaultFundingFeesSettled, expectedFlatMoneyVaultFundingFeesSettled, "Actual FlatMoneyVaultFundingFeesSettled should be the same as the expectedFlatMoneyVaultFundingFeesSettled");
  });
});

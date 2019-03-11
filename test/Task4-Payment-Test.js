const TrackParcel = artifacts.require('TrackParcel')


contract('Task 4 - Payment', async (accounts) => {

    it("Send 0.001 Ether", async () => {
        let instance = await TrackParcel.new();

        var balanceBefore = await web3.eth.getBalance("0xA38D3A2dc70a0c4e713612901AC90AE81f254Ab5");
        await instance.writeRecord(2001, "Hamburg", 23, 10, {
            from: accounts[0],
            value: 1000000000000000
        });

        var balanceAfter = await web3.eth.getBalance("0xA38D3A2dc70a0c4e713612901AC90AE81f254Ab5");
        var diff = balanceAfter - balanceBefore;
        assert.equal(diff, 1000000000000000);
    })

    it("Send 0 Ether. Exception expected", async () => {

        assert.fail("Test implementation expected");

    })

    it("Send 0.002 Ether. Refund expected", async () => {

        // This test gonna be tricky. 
        // As you have to consider: gasPrice, gasUsed, balanceBefore, balanceAfter, ...
        assert.fail("Test implementation expected");

        let instance = await TrackParcel.new();

        var balanceBefore = await web3.eth.getBalance(accounts[0]);
        var txReceipt = await instance.writeRecord(2001, "Hamburg", 23, 10, {
            from: accounts[0],
            value: 2000000000000000,
            gasPrice: 20000000000
        });

        // Finish the test implementation
    })
})
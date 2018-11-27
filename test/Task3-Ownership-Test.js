//based on https://github.com/ConsenSys/Tokens/tree/master/test
const TrackParcel = artifacts.require('TrackParcel')


contract('Task 2 - Ownership', async (accounts) => {

    it("Check Ownership", async () => {
        let instance = await TrackParcel.new();

        await instance.writeRecord(2001, "Hamburg", 23, {from: accounts[0]});
        await instance.writeRecord(4000, "Zürich", 27, {from: accounts[0]});
        
        try{
            await instance.writeRecord(2001, "Bern", 25, {from: accounts[1]});
            assert.fail("Exception expected before");
        }catch(err){
            assert(err.toString().includes('VM Exception while processing transaction: revert'), 
            'the EVM did not throw an error or did not throw the expected error: ' + err);
        }
    })
})

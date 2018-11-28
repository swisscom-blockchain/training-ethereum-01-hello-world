const TrackParcel = artifacts.require('TrackParcel')


contract('Task 1 - Event', async (accounts) => {

    it("Write record and check Event", async () => {
        let instance = await TrackParcel.new();

        let result = await instance.writeRecord(2001, "Hamburg", 23);

        //console.dir(result.logs[0]) 
        //console.dir(result.logs[0].args) 
        assert.equal(result.logs[0].event, "RecordEvent");
        assert.equal(result.logs[0].args.parcelId, 2001);
        assert.equal(result.logs[0].args.position, "Hamburg");
        assert.equal(result.logs[0].args.recordIndex, 0);
    })
})
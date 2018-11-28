//based on https://github.com/ConsenSys/Tokens/tree/master/test
const TrackParcel = artifacts.require('TrackParcel')


contract('TrackParcel', async (accounts) => {

    it("write and read record", async () => {
        let instance = await TrackParcel.new();

        await instance.writeRecord(2001, "Hamburg", 23);
        await instance.writeRecord(2001, "Zürich", 27);

        let result = await instance.readRecordSize(2001);
        assert.equal(result, 2);

        result = await instance.readRecord(2001, 0);
        assert.equal(result[0], "Hamburg");
        assert.equal(result[1], 23);

        result = await instance.readRecord(2001, 1);
        assert.equal(result[0], "Zürich");
        assert.equal(result[1], 27);
    })

    it("write and read record different parcelId", async () => {
        let instance = await TrackParcel.new();

        await instance.writeRecord(2001, "Hamburg", 23);
        await instance.writeRecord(4000, "Zürich", 27);

        let result = await instance.readRecordSize(2001);
        assert.equal(result, 1);

        result = await instance.readRecord(2001, 0);
        assert.equal(result[0], "Hamburg");
        assert.equal(result[1], 23);

        result = await instance.readRecord(4000, 0);
        assert.equal(result[0], "Zürich");
        assert.equal(result[1], 27);
    })
})
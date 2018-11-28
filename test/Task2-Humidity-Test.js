//based on https://github.com/ConsenSys/Tokens/tree/master/test
const TrackParcel = artifacts.require('TrackParcel')


contract('Task 2 - Humidity', async (accounts) => {

    it("test humidity", async () => {
        let instance = await TrackParcel.new();

        await instance.writeRecord(2001, "Hamburg", 23, 50, {
            from: accounts[0]
        });

        result = await instance.readRecord(2001, 0);
        assert.equal(result[0], "Hamburg");
        assert.equal(result[1], 23);
        assert.equal(result[2], 50);
    })

    it("out of range", async () => {
        let instance = await TrackParcel.new();

        try {
            await instance.writeRecord(2001, "Hamburg", 23, 101, {
                from: accounts[0]
            });
            assert.fail("Exception is expected a line before!");
        } catch (err) {
            //console.dir(err);
            assert.ok(err.toString().includes("humidity too high"), "Missing right error message")
        }
    })
})
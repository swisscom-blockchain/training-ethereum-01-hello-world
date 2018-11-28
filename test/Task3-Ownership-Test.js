const TrackParcel = artifacts.require('TrackParcel')


contract('Task 3 - Ownership', async (accounts) => {

    it("Check Ownership", async () => {
        let instance = await TrackParcel.new();

        await instance.writeRecord(2001, "Hamburg", 23, 10, {
            from: accounts[0]
        });

        await instance.writeRecord(4000, "Zürich", 27, 10, {
            from: accounts[0]
        });

        try {
            await instance.writeRecord(2001, "Bern", 25, 10, {
                from: accounts[1]
            });
            assert.fail("Exception expected before");
        } catch (err) {
            // console.dir(err);
            assert.ok(err.toString().includes("Invalid owner"), "Missing right error message")
        }
    })
})
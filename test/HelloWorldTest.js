//based on https://github.com/ConsenSys/Tokens/tree/master/test
const HelloWorld = artifacts.require('HelloWorld')


contract('HelloWorld Contract Tests', async (accounts) => {

    it("public member access", async () => {
        let instance = await HelloWorld.new();

        let text = await instance.textValue();
        assert.equal(text, "Hello world");

        text = await instance.staticText();
        assert.equal(text, "Static Text");
    })

    it("textValue Operations", async () => {
        let instance = await HelloWorld.new();

        let text = await instance.getTextValue();
        assert.equal(text, "Hello world");
    
        let result = await instance.setTextValue("New Text");
        //console.log(result);
        //console.log(result.logs[0].args);

        assert.equal(result.logs[0].event, "NewTextValue");
        assert.equal(result.logs[0].args.from, accounts[0]);
        assert.equal(result.logs[0].args.textValue, "New Text");

        text = await instance.getTextValue();
        assert.equal(text, "New Text");
    })

    it("textValue Operations with different sender", async () => {
        let instance = await HelloWorld.new();
    
        let result = await instance.setTextValue("New Text", {from: accounts[1]});

        assert.equal(result.logs[0].event, "NewTextValue");
        assert.equal(result.logs[0].args.from, accounts[1]);
        assert.equal(result.logs[0].args.textValue, "New Text");

        text = await instance.getTextValue();
        assert.equal(text, "New Text");
    })

    it("numberValue Operations", async () => {
        let instance = await HelloWorld.new();

        let value = await instance.getNumberValue();
        assert.equal(value, 43);
    
        let result = await instance.setNumberValue(100);
        
        //TODO: check the events in the result
        //assert.equal(result.logs[0].event, "???");

        value = await instance.getNumberValue();
        assert.equal(text, 100);
    })

    //TODO: add more tests
})

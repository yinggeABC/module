import {expect} from "chai"
import mymode from "../lib/mymod"

let lib;
describe("mymode test",()=>{
    before(()=>{
       lib = new mymode();
    })

describe("test mymode name",()=>{
    it("should return mymode",()=>{
        expect(lib.name).to.equal("mymod");
    })
})
})
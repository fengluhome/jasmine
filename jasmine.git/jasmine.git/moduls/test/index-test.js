/// <reference path="../../Scripts/boot.js" />
/// <reference path="../../Scripts/console.js" />
/// <reference path="../../Scripts/jasmine-html.js" />
/// <reference path="../../Scripts/jasmine.js" />
/// <reference path="index.js" />

describe("测试值的相等", function () {
    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = a;

        expect(a).toBe(b);


    });
});
describe("第一个i额", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });



});

describe("Included matchers:", function () {
    it("The 'toMatch' matcher is for regular expressions", function () {
        var message = "foo bar baz";

        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };

        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });


    it("toBeCloseTo数值比较，指定精度，先四舍五入再比较", function () {
        var pi = 3.1415926, e = 2.78;

        expect(pi).toBeCloseTo(e, 0);
        expect(pi).not.toBeCloseTo(e, 2);
    });
});

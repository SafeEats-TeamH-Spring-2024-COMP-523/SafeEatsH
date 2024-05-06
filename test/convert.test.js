import { numToBool, boolToNum, boolToAllergy } from '../config/converts';

describe("NumToBool", () => {
     // console.log(numToBool(5));
    test('num=0 should result in whole arr = false', () => {
        expect(numToBool(0)).toEqual(new Array(12).fill(false));
    });

    test('num<0 should result in whole arr = false', () => {
        expect(numToBool(-1)).toEqual(new Array(12).fill(false));
    });

    let testnum5 = [true, false, true, false,
                     false, false, false, false,
                     false, false, false, false]
    test('num=5 ', () => {
        expect(numToBool(5)).toEqual(testnum5);
     });

     let testnum8 = [false, false, false, true,
                     false, false, false, false,
                     false, false, false, false]
    test('num=8 ', () => {
        expect(numToBool(8)).toEqual(testnum8);
    });
});

describe("BoolToNum", () => {
    let testnum5 = [true, false, true, false,
        false, false, false, false,
        false, false, false, false]
    test('bool arr -> num 5', () => {
        expect(boolToNum(testnum5)).toEqual(5);
    });

    let testnum8 = [false, false, false, true,
                    false, false, false, false,
                    false, false, false, false]
    test('bool arr -> num 8', () => {
       expect(boolToNum(testnum8)).toEqual(8);
    });
});

describe("BoolToAllergy", () => {
    let testnum5 = [true, false, true, false,
        false, false, false, false,
        false, false, false, false];
    let testnum5expected = ["Milk", "Fish"]
    test('bool arr -> num 5', () => {
        expect(boolToAllergy(testnum5)).toEqual(testnum5expected);
    });

    let testnum8 = [false, false, false, true,
                    false, false, false, false,
                    false, false, false, false]
    let testnum8expected = ["Tree Nuts"]
    test('bool arr -> num 8', () => {
       expect(boolToAllergy(testnum8)).toEqual(testnum8expected);
    });

    test('false arr', () => {
        expect(boolToAllergy(new Array(12).fill(false))).toEqual([]);
    });

    let testtrueexpected = ["Milk", "Eggs", "Fish", "Tree Nuts", "Peanuts", "Soybeans", "Wheat", "Shellfish", "Gluten Free", "Vegan", "Vegetarian", "Halal"]
    test('true arr', () => {
        expect(boolToAllergy(new Array(12).fill(true))).toEqual(testtrueexpected);
    });
    
});
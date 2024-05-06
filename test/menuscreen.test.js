import { safefilter } from '../tab/components/MenuScreen.js';
import FoodItem from "./FoodItem";
import menu from "../../backend/chmenus.json";

describe("SafeFilter", () => {
    // NEED TO FIX, PLACEHOLDER TEST
    let peanutsonly = ["Peanuts"]
    let someitem = FoodItem({restaurant: "Chick-fil-A", name: "Chick-fil-A Chicken Sandwich", Description: "A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips. Also available on a multigrain bun.", Price: 4.85});
    test('bool arr -> num 5', () => {
        expect(safefilter(peanutsonly, someitem)).toEqual(false);
    });
});
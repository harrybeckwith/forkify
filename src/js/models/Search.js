
import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

   async getResults() {
        const key = "81b7acff347be1b69582a13c22ef1812";
        try {
            const res = await axios(
            `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`,
            );
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            console.log(error);
        }
    }
}
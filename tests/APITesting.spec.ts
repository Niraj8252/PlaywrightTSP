import{test, expect} from "@playwright/test"
import { request } from "http"

test("Get request", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2");
    console.log(await response.json());
})
/*
As iframe (short for "inline frame") is an html element that allows you to embed another html document within the current document.
Iframe are commonly used to embed external content such as videos, maps, or other web pages (as seen here) into a web page without affecting the parent document.

*/

import {test, expect} from "@playwright/test"

test("Frame handling", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");


    // Total number of frames

    const frames = page.frames();
    console.log("Total number of frames : ", frames.length);

    // Approach 1.  Using page.frame()..... 

    // const frame=page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"});

    // if(frame){
    //     await frame.locator("[name='mytext1']").fill("Hello all");
    //     // await frame.fill("[name='mytext1']", "Hello all");
    // }else{
    //     console.log("Frame is not available")
    // }

  // Approach 2.  Using page.frameLocator()..... 
    const inputBox = page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
    await inputBox.fill("Good morning");
    await page.waitForTimeout(3000);
});

test.only("Inner Frame handling", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");


    // Total number of frames
    const frames = page.frames();
    console.log("Total number of frames : ", frames.length);

    const frame3=page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});


    const innfm = frame3?.frameLocator("[src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']");
    await innfm?.getByLabel("I am a human").check();
    // if(frame3){
    //     const childFrames = frame3.childFrames();
    //     console.log("Child frame imside the frame3 : ", childFrames.length);

    //     const radio =childFrames[0].getByLabel("I am a human");
    //     await radio.check();
    //     expect(radio).toBeChecked();

    // }else{
    //     console.log("Frame3 not available");
    // }


    await page.waitForTimeout(3000);
});
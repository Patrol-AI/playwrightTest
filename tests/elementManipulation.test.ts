import { test, expect} from '@playwright/test';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('Screenshot Target Elements', async ({ page }) => {
  await page.goto(`file://${__dirname}/../public/index.html`);

  //Add screenshot buffers to this array in order of the images 1 - 8.  
  const screenshots : Buffer[] = [];

  //Add your solution here
  
  validateScreenshots(screenshots);
})

const validateScreenshots = (screenshots : Buffer[]) => {
    if(screenshots.length !== 8){
      throw new Error("Incorrect number of screenshots for validation")
    }

    for(let i : number = 0; i < 7; i++){
        const savedScreenshotBuffer : Buffer = fs.readFileSync(`${__dirname}/../targetScreenshots/screenshot_${i + 1}.png`);

        expect(screenshots[i]).toEqual(savedScreenshotBuffer);
    }
}

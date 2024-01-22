// got the content list so import so it can be used
import { Content } from './content-interface';

export class ContentList {
    private contentArray: Content[] = [];

    constructor() {
        this.contentArray = [];
    }

    get getContentArray(): Content[] {
        return this.contentArray;
    }
// to add new Content item to the list
    add(contentItem: Content): void {
        this.contentArray.push(contentItem);
    }
// counting the number of item
    count(): number {
        return this.contentArray.length;
    }

    // display the output to the index 
    displayContent(index: number): string {
        if (index < 0 || index >= this.contentArray.length) {
            return 'Invalid index';
        }
        const content = this.contentArray[index];
        let htmlOutput = `<h2>${content.title}</h2>
                          <p>${content.description}</p>
                          <p>Creator: ${content.creator}</p>`;
        if (content.imgURL) {
            htmlOutput += `<img src="${content.imgURL}" alt="${content.title}" style="max-width: 100%; height: auto;" />`;
        }
        if (content.type) {
            htmlOutput += `<p>Type: ${content.type}</p>`;
        }


        return htmlOutput;
    }
}

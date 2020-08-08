class Mparser {
    constructor(markdown) {
        this.markdown = markdown;
        this.parsedObject = {};
        this.parsedObject.bold = [];
        this.markdownTrimmed = this.markdown.trim().split(' ');
        this.regexpBold = /^\*[a-zA-Z]*\*$/;
    }
    matchBold() {
        for (var i = 0; i < this.markdownTrimmed.length; i++) {
            if (this.markdownTrimmed[i].match(this.regexpBold) != null) {
                this.string = this.markdownTrimmed[i];
                this.formatted = this.string.slice(0, -1).substr(1);
                this.parsedObject.bold.push(this.formatted)
            }
        }
    }
}

var x = new Mparser("Hello *hello*"); 

export {Mparser};
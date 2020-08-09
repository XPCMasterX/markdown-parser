class Mparser {
    constructor(markdown, defaultHTMLTag) {
        this.markdown = markdown;
        if (!Array.isArray(defaultHTMLTag)) {
            throw "Type Error: defaultHTMLTag must be an array";
        } else {
            this.defaultHTMLTag = defaultHTMLTag;
        }
        this.parsedObject = [];
        this.markdownTrimmed = this.markdown.trim().split(' ');
        this.regexps = [
            {
                regex: /^\*[ -~]*\*$/,
                tags: ["<i>", "</i>"],
                type: "italics"
            },
            {
                regex: /^\_[ -~]*\_$/,
                tags: ["<i>", "</i>"],
                type: "italics2"
            },
            {
                regex: /^\*{2}[ -~]*\*{2}$/,
                tags: ["<strong>", "</strong>"],
                type: "bold"
            },
            {
                regex: /^\_{2}[ -~]*\_{2}$/,
                tags: ["<strong>", "</strong>"],
                type: "bold2"
            },
            {
                regex: /^\~{2}[ -~]*\~{2}$/,
                tags: ["<del>", "</del>"],
                type: "strikethrough"
            },
            
        ];
        this.hasMatchedRegex = false;
    }

    matchBold() {
        for (var i = 0; i < this.markdownTrimmed.length; i++) {
            this.hasMatchedRegex = false;

            // Need to work on this
            /*for (var j = 0; j < this.regexps.length; j++) {
                if (this.markdownTrimmed[i].match(this.regexps[j].regex) != null && !this.hasMatchedRegex) {
                    this.string = this.markdownTrimmed[i];
                    this.formatted = this.string.slice(0, -1).substr(1);

                    this.parsedObject[i] = {};
                    this.parsedObject[i].content = this.formatted;
                    this.parsedObject[i].htmlTags = this.regexps[j].tags;
                    this.hasMatchedRegex = true;
                    console.log(this.parsedObject[i]);
                } 
            }
            if (this.hasMatchedRegex !== true) {
                this.parsedObject[i] = {};
                this.parsedObject[i].content = this.formatted;
                this.parsedObject[i].htmlTags = this.defaultHTMLTag;
                console.log(this.parsedObject[i] + "Failed");
            }*/
        }
    }
}

export {Mparser};
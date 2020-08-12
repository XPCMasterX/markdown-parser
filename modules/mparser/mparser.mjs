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
                regex: /^\*[^*]*\*$/,
                tags: ["<i>", "</i>"],
                type: "italics"
            },
            {
                regex: /^\_[^_]*\_$/,
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
            for (var j = 0; j < this.markdownTrimmed.length; j++) {
                if (this.markdownTrimmed[i].match(this.regexps[j].regex) !== null && !this.hasMatchedRegex) {
                    this.parsedObject[i] = {};
                    this.parsedObject[i].text = this.markdownTrimmed[i];
                    this.parsedObject[i].type = this.regexps[j].type;
                    this.parsedObject[i].tags = this.regexps[j].tags;
                    this.hasMatchedRegex = true;
                }
            }
            if (!this.hasMatchedRegex) {
                this.parsedObject[i] = {};
                this.parsedObject[i].text = this.markdownTrimmed[i];
                this.parsedObject[i].type = "text";
                this.parsedObject[i].tags = this.defaultHTMLTag;
            }
        }
    }
}

export {Mparser};

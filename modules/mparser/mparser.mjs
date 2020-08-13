class Mparser {
    constructor(markdown, defaultHTMLTag, defaultType) {
        this.markdownTemp = markdown.trim().split(' ');
        this.markdownFormatted = [];
        
        for (var a = 0; a < this.markdownTemp.length; a++) {
            this.markdownFormatted[a] = {};
            this.markdownFormatted[a].text = this.markdownTemp[a];
            this.markdownFormatted[a].hasMatched = false;
        }

        if (!Array.isArray(defaultHTMLTag)) {
            throw "Type Error: defaultHTMLTag must be an array";
        } else {
            this.defaultHTMLTag = defaultHTMLTag;
        }

        if (defaultType === undefined) {
            throw "Type Error: defaultType must not be undefined";
        } else {
            this.defaultType = defaultType;
        }

        this.parsedObject = [];
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
    }

    match() {
        for (var i = 0; i < this.markdownTemp.length; i++) {
            for (var j = 0; j < this.regexps.length; j++) {
                if (this.regexps[j].regex.test(this.markdownFormatted[i].text)) {
                    this.parsedObject[i] = {};
                    this.parsedObject[i].text = this.markdownFormatted[i].text;
                    this.parsedObject[i].tags = this.regexps[j].tags;
                    this.parsedObject[i].type = this.regexps[j].type;
                    this.markdownFormatted[i].hasMatched = true;
                }
            }
            if (this.markdownFormatted[i].hasMatched !== true) {
                this.parsedObject[i] = {};
                this.parsedObject[i].text = this.markdownFormatted[i].text;
                this.parsedObject[i].tags = this.defaultHTMLTag;
                this.parsedObject[i].type = this.defaultType;
            }
        }
        return this.parsedObject;
    }
}

export {Mparser};

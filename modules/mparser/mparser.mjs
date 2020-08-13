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
                tagsVisual: ["<i>", "</i>"],
                type: "italics"
            },
            {
                regex: /^\_[^_]*\_$/,
                tagsVisual: ["<i>", "</i>"],
                type: "italics2"
            },
            {
                regex: /^\*{2}[ -~]*\*{2}$/,
                tagsVisual: ["<strong>", "</strong>"],
                type: "bold"
            },
            {
                regex: /^\_{2}[ -~]*\_{2}$/,
                tagsVisual: ["<strong>", "</strong>"],
                type: "bold2"
            },
            {
                regex: /^\~{2}[ -~]*\~{2}$/,
                tagsVisual: ["<del>", "</del>"],
                type: "strikethrough"
            },
            {
                regex: /^\#{1}[ ][ -~]*/,
                tagsVisual: ["<h1>", "<h1>"],
                type: "heading1"
            },
            {
                regex: /^\#{2}[ ][ -~]*/,
                tagsVisual: ["<h2>", "<h2>"],
                type: "heading2"
            },
            {
                regex: /^\#{3}[ ][ -~]*/,
                tagsVisual: ["<h3>", "<h3>"],
                type: "heading3"
            },
            {
                regex: /^\#{4}[ ][ -~]*/,
                tagsVisual: ["<h4>", "<h4>"],
                type: "heading4"
            },
            {
                regex: /^\#{5}[ ][ -~]*/,
                tagsVisual: ["<h5>", "<h5>"],
                type: "heading5"
            },
            {
                regex: /^\#{6}[ ][ -~]*/,
                tagsVisual: ["<h6>", "<h6>"],
                type: "heading6"
            },
            {
                regex: /\-{6}/,
                tagsVisual: ["<hr>"],
                type: "headingLine"
            },
            {
                regex: /\={6}/,
                tagsVisual: ["<hr>"],
                type: "headingLine2"
            },
        ];
    }

    match() {
        for (var i = 0; i < this.markdownTemp.length; i++) {
            for (var j = 0; j < this.regexps.length; j++) {
                if (this.regexps[j].regex.test(this.markdownFormatted[i].text)) {
                    this.parsedObject[i] = {};
                    this.parsedObject[i].text = this.markdownFormatted[i].text;
                    this.parsedObject[i].tagsVisual = this.regexps[j].tagsVisual;
                    this.parsedObject[i].type = this.regexps[j].type;
                    this.markdownFormatted[i].hasMatched = true;
                }
            }
            if (this.markdownFormatted[i].hasMatched !== true) {
                this.parsedObject[i] = {};
                this.parsedObject[i].text = this.markdownFormatted[i].text;
                this.parsedObject[i].tagsVisual = this.defaultHTMLTag;
                this.parsedObject[i].type = this.defaultType;
            }
        }
        return this.parsedObject;
    }
}

export {Mparser};

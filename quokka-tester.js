console.log(JSON.stringify([
    {
        regex: /^\*[^*]*\*$/,
        tags: "i",
        tagsVisual: ["<i>", "</i>"],
        type: "italics"
    },
    {
        regex: /^\_[^_]*\_$/,
        tags: "i",
        tagsVisual: ["<i>", "</i>"],
        type: "italics2"
    },
    {
        regex: /^\*{2}[ -~]*\*{2}$/,
        tags: "strong",
        tagsVisual: ["<strong>", "</strong>"],
        type: "bold"
    },
    {
        regex: /^\_{2}[ -~]*\_{2}$/,
        tags: "strong",
        tagsVisual: ["<strong>", "</strong>"],
        type: "bold2"
    },
    {
        regex: /^\~{2}[ -~]*\~{2}$/,
        tags: "del",
        tagsVisual: ["<del>", "</del>"],
        type: "strikethrough"
    },
    {
        regex: /^\#{1}[ ][ -~]*/,
        tags: "h1",
        tagsVisual: ["<h1>", "<h1>"],
        type: "heading1"
    },
    {
        regex: /^\#{2}[ ][ -~]*/,
        tags: "h2",
        tagsVisual: ["<h2>", "<h2>"],
        type: "heading2"
    },
    {
        regex: /^\#{3}[ ][ -~]*/,
        tags: "h3",
        tagsVisual: ["<h3>", "<h3>"],
        type: "heading3"
    },
    {
        regex: /^\#{4}[ ][ -~]*/,
        tags: "h4",
        tagsVisual: ["<h4>", "<h4>"],
        type: "heading4"
    },
    {
        regex: /^\#{5}[ ][ -~]*/,
        tags: "h5",
        tagsVisual: ["<h5>", "<h5>"],
        type: "heading5"
    },
    {
        regex: /^\#{6}[ ][ -~]*/,
        tags: "h6",
        tagsVisual: ["<h6>", "<h6>"],
        type: "heading6"
    },
    {
        regex: /\-{6}/,
        tags: "hr",
        tagsVisual: ["<hr>"],
        type: "headingLine"
    },
    {
        regex: /\={6}/,
        tags: "hr",
        tagsVisual: ["<hr>"],
        type: "headingLine2"
    },
]));


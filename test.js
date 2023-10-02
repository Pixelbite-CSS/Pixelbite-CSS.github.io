const class_library = [
    ['c', 'color'],
    ['p', 'padding'],
    ['pos', 'position'],
    ['o', 'opacity'],
    ['pt', 'padding-top'],
    ['pb', 'padding-bottom'],
    ['pl', 'padding-left'],
    ['pr', 'padding-right'],
    ['m', 'margin'],
    ['mt', 'margin-top'],
    ['mb', 'margin-bottom'],
    ['ml', 'margin-left'],
    ['mr', 'margin-right'],
    ['g', 'gap'],
    ['ar', 'aspect-ratio'],
    ['d', 'display'],
    ['w', 'width'],
    ['h', 'height'],
    ['maxW', 'max-width'],
    ['maxH', 'max-height'],
    ['minW', 'min-width'],
    ['minH', 'min-height'],
    ['border', 'border'],
    ['b', 'border'],
    ['bleft', 'border-left'],
    ['bright', 'border-right'],
    ['btop', 'border-top'],
    ['bbottom', 'border-bottom'],
    ['br', 'border-radius'],
    ['bg', 'background'],
    ['ta', 'text-align'],
    ['ff', 'font-family'],
    ['fs', 'font-size'],
    ['fw', 'font-weight'],
    ['td', 'text-decoration'],
    ['fill', 'fill'],
    ['of', 'overflow'],
    ['ofx', 'overflow-x'],
    ['ofy', 'overflow-y'],
    ['flex', 'flex'],
    ['flexDirection', 'flex-direction'],
    ['flexWrap', 'flex-wrap'],
    ['flexItems', 'align-items'],
    ['flexContent', 'align-content'],
    ['flexJustifyContent', 'justify-content'],
    ['flexAlignItems', 'align-items'],
    ['gridColumns', 'grid-template-columns'],
    ['gridRows', 'grid-template-rows'],
    ['shadow', 'box-shadow'],
    ['top', 'top'],
    ['bottom', 'bottom'],
    ['left', 'left'],
    ['right', 'right'],
    ['ws', 'word-spacing'],
    ['ls', 'letter-spacing'],
    ['lh', 'line-height'],
    ['zIndex', 'z-index'],
]

const pb_getRootVariable = (propertyValue) => {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyValue).toString()
}

const pb_putCustomFontIntoCSS = (name, url) => {
    let newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode("@font-face {font-family: " + name + "; src: " + url + ";}"));
    document.head.appendChild(newStyle);
}

var pixelbite = {
    classes: class_library,
    variables: {
            primary: pb_getRootVariable('--primary-color').toString(),
            secondary: pb_getRootVariable('--secondary-color').toString(),
            danger: pb_getRootVariable('--danger-color').toString(),
            info: pb_getRootVariable('--info-color').toString(),
            warning: pb_getRootVariable('--warning-color').toString(),
            success: pb_getRootVariable('--success-color').toString(),
            fontPrimary: pb_getRootVariable('--font-family').toString(),
            fontMonospace: pb_getRootVariable('--font-mono-family').toString(),
    },
    colors: {
            white: [0, '0%'],
            gray: [0, '0%'],
            black: [0, '0%'],
            red: [0, '100%'],
            orange: [36, '100%'],
            yellow: [59, '100%'],
            green: [108, '100%'],
            teal: [154, '100%'],
            cyan: [182, '100%'],
            blue: [235, '100%'],
            purple: [275, '100%'],
            pink: [300, '100%'],
    },
    aliases: {},
    loremIpsum: [
        "Hercle, species primus!",
        "Indexs volare, tanquam emeritis nix.",
        "Festus bulla vix locuss barcas est.",
        "Domuss sunt equisos de flavum cedrium.",
        "A falsis, diatria emeritis clabulare.",
        "Medicinas sunt menss de pius nuclear vexatum iacere.",
        "Verpas sunt plasmators de brevis pes.",
        "Placidus, alter nuclear vexatum iaceres patienter talem de nobilis, noster cursus.",
        "Ubi est azureus castor?",
        "Cum abnoba resistere, omnes hilotaees examinare pius, emeritis poetaes.",
        "Ubi est bi-color lanista?",
        "Stellas prarere in ostravia!",
        "Ausus peregrinationess, tanquam talis mensa.",
        "Est teres deus, cesaris.",
        "Est dexter animalis, cesaris.",
        "Finis albus eleates est.",
        "Bassus consilium interdum captiss accentor est.",
        "Fuga noceres, tanquam castus racana.",
        "Contencio, byssus, et tata.",
        "Sunt guttuses gratia ferox, velox decores.",
        "Elogium mirabilis abactor est.",
        "Nunquam magicae mensa.",
        "Pol, a bene historia.",
        "Ubi est raptus acipenser?",
        "Mensa, ratione, et vortex.",
        "Rumors cantare!",
        "Decors volare!",
        "Fluctuss peregrinationes!",
        "Cum agripeta credere, omnes silvaes transferre domesticus, clemens sectames.",
        "Lapsus de domesticus era, manifestum lanista!",
        "Cur clabulare ridetis?",
        "Nam quis nulla.",
        "Deuss observare, tanquam albus domus.",
        "A falsis, planeta rusticus visus.",
        "Primus seculas ducunt ad orgia.",
        "Pol, a bene guttus, magnum glos!",
        "Ortum satis ducunt ad fortis candidatus.",
        "Neuter, alter fraticinidas unus attrahendam de teres, fortis rumor.",
        "Devatios ortum!",
        "Cadunt saepe ducunt ad primus imber.",
        "Ubi est camerarius species?",
        "Vae.",
        "Genetrixs sunt adiurators de nobilis exemplar.",
        "Nullam rhoncus aliquam metus.",
        "Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.",
        "Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.",
        "In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.",
        "Mauris suscipit.",
        "Etiam sapien elit, consequat eget.",
        "Etiam neque.",
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        "Integer in sapien.",
        "Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.",
        "Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.",
        "Duis condimentum augue id magna semper rutrum.",
        "Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.",
        "Jsi cool člověk.",
        "Fusce aliquam vestibulum ipsum.",
        "Aliquam erat volutpat.",
        "Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.",
    ],
    markdowns: {
        github: [
            // { pattern: /</g, replacement: "&lt;" },
            // { pattern: />/g, replacement: "&gt;" },
            {
                pattern: /^((?: )*)((?:-|\*|\+)\s|\d+\.\s)(.*)$/gm, replacement: function (match, p1, p2, p3) {
                    let regex = / /g;
                    let matches = p1.match(regex);
                    let count = matches ? matches.length : 0;
                    let countSize = (count + 1) * 12
                    return "<li class='ml-" + countSize + "px'>" + p3 + "</li>";
                }
            },
            {pattern: /<\/li>\n<li>/g, replacement: "</li>\n$&"},
            {pattern: /^(\t*)<\/li>\n<\/ul>/gm, replacement: "$1</li>\n$1</ul>"},
            {pattern: /^(\t*)<\/li>\n<\/ol>/gm, replacement: "$1</li>\n$1</ol>"},
            {pattern: /^(\t*)<\/li>\n<\/li>/gm, replacement: "$1</li>\n$1<li>"},
            {pattern: /^(\t*)<\/ul>\n<ul>/gm, replacement: "$1</ul>\n$1<ul>"},
            {pattern: /^(\t*)<\/ol>\n<ol>/gm, replacement: "$1</ol>\n$1<ol>"},

            {pattern: /^#{6}\s+(.*)$/gm, replacement: "<h6>$1</h6>"},
            {pattern: /^#{5}\s+(.*)$/gm, replacement: "<h5>$1</h5>"},
            {pattern: /^#{4}\s+(.*)$/gm, replacement: "<h4>$1</h4>"},
            {pattern: /^#{3}\s+(.*)$/gm, replacement: "<h3>$1</h3>"},
            {pattern: /^#{2}\s+(.*)$/gm, replacement: "<h2>$1</h2>"},
            {pattern: /^#{1}\s+(.*)$/gm, replacement: "<h1>$1</h1>"},
            {
                pattern: /```([\s\S]*?)```/g, replacement: function (match, p1) {
                    p1 = p1.replace(/</g, '&lt;').replace(/>/g, '&gt;').replaceAll('*', '&#x2A;').replaceAll('_', '&#x5F;').replaceAll('[', '&#x5B;')
                    return "```" + p1 + "```";
                }
            },
            {pattern: /^!~(.*?)$/gm, replacement: "<span class='highlight'>$1</span>"},
            {pattern: /^~~(.*?)$/gm, replacement: "<span>$1</span>"},
            {pattern: /~(.*?)~/g, replacement: "<code class=\"c-info\">$1</code>"},
            {pattern: /^- \[(x| )\]\s+(.*)$/gm, replacement: "<li><input type=\"checkbox\" $1> $2</li><ul>"},
            {pattern: /!\[([^\]]+)\]\(([^\s)]+)\)/g, replacement: '<img alt="$1" src="$2">'},
            { pattern: /(\[([^\]]+)\])?\(([^)\s]+)(?:\s"([^"]+)")?\)/g, replacement: function (match, p1, p2, p3, p4) {
                    let text = p2 || p3;
                    let title = p4 ? ' title="' + p4 + '"' : '';
                    if (p1) return '<a href="' + p3 + '"' + title + '>' + text + '</a>';
                    else return '(' + text + ')'
                }
            },
            {pattern: /\*\*\*([^*]+)\*\*\*/g, replacement: '<strong><em>$1</em></strong>'},
            {pattern: /\*\*([^*]+)\*\*/g, replacement: '<strong>$1</strong>'},
            {pattern: /\*([^*]+)\*/g, replacement: '<em>$1</em>'},
            {pattern: /___([^*]+)___/g, replacement: '<strong><em>$1</em></strong>'},
            {pattern: /__([^_]+)__/g, replacement: '<strong>$1</strong>'},
            {pattern: /_([^_]+)_/g, replacement: '<em>$1</em>'},

            // {pattern: /~~(.*)~~/g, replacement: "<del>$1</del>"},
            {pattern: /^>\s+(.*)$/gm, replacement: "<blockquote>$1</blockquote>"},
            {
                pattern: /```([\w-]+)?\n([\s\S]*?)\n```/gm,
                replacement: '<pre class=\"numberedLines maxw-100% b-1px-solid-primary br-6px p-12px-16px\" $1><code>$2</code></pre>'
            },
            {
                pattern: /`([^`]+)`/gm,
                replacement: '<code class="bg-rgba(128,128,128,.15) c-white50 fw-600 fs-12px p-2px-4px br-4px">$1</code>'
            },
            {pattern: /\n---\n/gm, replacement: "<hr>"},
            {pattern: /<\/li>\n\n/gm, replacement: "</li><br>"},
            {pattern: /<\/div>\n\n/gm, replacement: "</div><br>"},
            {pattern: /<\/pre>\n\n/gm, replacement: "</pre><br>"},
            {pattern: /\n\n/gm, replacement: "<br><br>"},
        ]
    },
    configs: [],
    components: [],
    fontawesome: 'https://kit.fontawesome.com/f474ae69e7.js',
    debug: false,
    version: 'beta-1.6'
}

const pb_getObjectValues = (object) => {
    return Object.entries(object)
}

const pb_setCustomComponents = () => {
    let elements = document.getElementsByTagName('*')
    pb_customComponentsCheck(elements)
}

const pb_customComponentsCheck = (array, relativePath) => {
    let components = pb_getObjectValues(pixelbite.components)
    if (!relativePath) relativePath = ''
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (element.tagName.toUpperCase().includes('COMPONENT')) {
            let element_attributes = element.getAttributeNames()
            let path = pb_alocatePath(element.getAttribute('path'))
            if (path.startsWith('http://') || path.startsWith('https://')) {
                path = element.getAttribute('path')
            } else {
                path = relativePath + element.getAttribute('path')
            }
            pb_includeHtmlToAnElement(element, path, element_attributes)
        }
        for (let j = 0; j < components.length; j++) {
            if (element.tagName.toUpperCase().includes(components[j][0].toLocaleUpperCase())) {
                let element_attributes = element.getAttributeNames()
                let path = pb_alocatePath(components[j][1])
                pb_includeHtmlToAnElement(element, path, element_attributes)
            }          
        }
    }
}

function pb_replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

function deleteFromString(string, value) {
    return string.replaceAll(value, '')
}

const pb_customMarkdown = (text, markdown) => {
    let replacements = []
    let markdowns = pb_getObjectValues(pixelbite.markdowns)
    for (let i = 0; i < markdowns.length; i++) {
        if (markdowns[i][0] === markdown) {
            replacements = markdowns[i][1]
        }
    }
    let html = text;
    replacements.forEach(({pattern, replacement}) => {
        html = html.replace(pattern, replacement);
    });
    return html;
}

const pb_componentErrorMessage = (element, attributes, message) => {
    let toggleClass = 'toggle-' + pb_randomString(32)
    let toggleClassMore = 'toggle-' + pb_randomString(32)
    let detailsString = '';
    for (let i = 0; i < attributes.length; i++) {
        detailsString += ' - [' + attributes[i] + '="' + element.getAttribute(attributes[i]).replaceAll('<', '&lt;') + '"], <br>'
    }
    element.innerHTML =
        '<div class="' + toggleClass + ' fw-500 p-14px-20px bg-warning br-4px m-4px pr-48px d-block">' +
        '<code>' + message + '<br></code>' +
        '<code class="noselect ' + toggleClassMore + '" onclick="toggleElement(\'' + toggleClassMore + '\')">- see more details</code>' +
        '<div class="flexColumn flexLeft ' + toggleClassMore + ' hidden"><code class="noselect" onclick="toggleElement(\'' + toggleClassMore + '\')">- see less details</code><code><br>this.getAttributes():<br>' + detailsString + '</code></div>' +
        '<button class="close-x" onclick="toggleElement(\'' + toggleClass + '\')"></button>' +
        '</div>'
}

const pb_includeHtmlToAnElement = async (element, path, attributes) => {
    if (!path) path = 'null'
    let relativePathSplit = path.split('/')
    let relativePath = ''
    for (let i = 0; i < relativePathSplit.length - 1; i++) {
        relativePath += relativePathSplit[i] + '/'
    }
    let componentRequest = new XMLHttpRequest();
    componentRequest.onreadystatechange = async function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let response = this.response.replaceAll('\t', '  ')
                for (let i = 0; i < attributes.length; i++) {
                    let attribute = attributes[i]
                    if (attribute.includes(':object')) {
                        let object = ''
                        let objectName = attribute.replace(':object', '')
                        let objectPath = element.getAttribute(attribute)
                        let objectRequest = new XMLHttpRequest();
                        objectRequest.onreadystatechange = function () {
                            if (this.readyState === 4) {
                                if (this.status === 200) {
                                    try {
                                        object = JSON.parse(this.responseText);
                                    } catch (error) {
                                        console.error('PixelBite: Attribute "' + objectName + ':object[' + objectPath + ']" in component has syntax error.')
                                    }
                                }
                            }
                            if (this.status === 404) {
                                object = null
                            }
                        };
                        try {
                            objectRequest.open("GET", objectPath, true);
                            objectRequest.send();
                        } catch (err) {
                            console.error("help")
                        }
                        while (!object) {
                            await pb_sleep(10)
                        }
                        const regex = /\$\{for\(([\s\S]*?)\)\}/g;
                        const objectFors = response.match(regex);
                        if (objectFors) {
                            for (let j = 0; j < objectFors.length; j++) {
                                if (objectFors[j].includes('${for(')) {
                                    let objectForSplit = objectFors[j].substring(6, objectFors[j].length - 2).split('::')
                                    let string = ''
                                    for (let k = 0; k < eval(objectForSplit[0]); k++) {
                                        string += pb_replaceAll(objectForSplit[1], '[i]', '[' + k + ']')
                                    }
                                    response = pb_replaceAll(response, objectFors[j], string)
                                }
                            }
                        }
                        let objectStrings = response.match(/\${(.*?)}/g);
                        if (objectStrings) {
                            for (let j = 0; j < objectStrings.length; j++) {
                                if (objectStrings[j].includes(objectName)) {
                                    let objectString = objectStrings[j].replace('${', '').replace('}', '')
                                    try {
                                        let value = eval(objectString)
                                        response = pb_replaceAll(response, objectStrings[j], value)
                                    } catch (error) {
                                        response = pb_replaceAll(response, objectStrings[j], '')
                                        console.error('PixelBite: Cannot read property from "' + objectName + '[object]" (reading "' + objectStrings[j] + '"), please check if value in the object exists.')
                                    }
                                }
                            }
                        }
                    }
                    let attribute_syntax = '${' + attributes[i] + '}'
                    if (response.includes(attribute_syntax)) {
                        // response = response.replace(attribute_syntax, element.getAttribute(attribute))
                        response = pb_replaceAll(response, attribute_syntax, element.getAttribute(attribute))
                        element.removeAttribute(attribute)
                    }
                }
                if (element.getAttribute('markdown')) {
                    response = pb_customMarkdown(response, element.getAttribute('markdown'))
                }
                element.innerHTML = response
                if (element.getElementsByTagName('COMPONENT')) {
                    pb_customComponentsCheck(element.getElementsByTagName('COMPONENT'), relativePath)
                }
            }
            if (this.status === 404) {
                pb_componentErrorMessage(element, attributes, 'Component not found [path=' + path + ']')
            }
        }
        pb_classGenerator()
    }
    try {
        componentRequest.open("GET", path, true);
        componentRequest.send();
    } catch (err) {
        console.error(err)
    }
}

let darkmode = false

window.addEventListener("load", async () => {
    await pb_alocatedPath()
    await pb_checkLoremIpsum()
    let darkmodeCookie = pb_getCookie('darkmode')
    if (!darkmodeCookie) {
        pb_setCookie('darkmode', '0', 365)
        darkmode = '0'
    } else {
        darkmode = darkmodeCookie
    }
    pb_classGenerator()
    await pb_configureConfigs(pixelbite.configs)
    pb_setCustomComponents()
    pb_slideshowGenerator()
    await pb_addFontAwesome()
    pb_checkLoaders()
})

const pb_alocatedPath = () => {
    const a = document.getElementsByTagName('*')
    for (let i = 0; i < a.length; i++) {
        let element = a[i]
        let elementAttributeNames = element.getAttributeNames()
        for (let j = 0; j < elementAttributeNames.length; j++) {
            if(element.getAttribute(elementAttributeNames[j]).includes('@/')) {
                element.setAttribute(
                    elementAttributeNames[j],
                    element.getAttribute(elementAttributeNames[j]).replace(/.*?@\/\s*/,'@/').replaceAll('@/', window.location.protocol + "//" + window.location.host + "/")
                )
            }
        }
    }
}

const pb_alocatePath = (string) => {
    return string.replace(/.*?@\/\s*/,'@/').replaceAll('@/', window.location.protocol + "//" + window.location.host + "/")
}

const pb_configureConfigs = async (urls) => {
    await pb_configEval(window.location.protocol + "//" + window.location.host + "/pixelbite.conf")
    for (let j = 0; j < urls.length; j++) {
        await pb_configEval(urls[j])
    }
    pb_classGenerator()
}

function pb_extractWordBeforeEquals(string) {
    const regex = /(\w+)\s*=/;
    const match = string.match(regex);
    return match ? match[1] : null;
}

const pb_configEval = async (url) => {
    const pattern = /^(http|https|ftp):\/\//;
    if (!pattern.test(url)) {
        url = window.location.protocol + "//" + window.location.host + "/" + url
    }
    const object = {
        values: {
            components: {},
            aliases: {},
            variables: {},
            colors: {},
            markdowns: {}
        }
    }
    let text = (await fetchFile(url))
    if (text) {
        const lines = text
            .replace(/\/\/(?=(?:[^'"`]*['"`][^'"`]*['"`])*[^'"`]*$).*/g, '')
            .replace(/#(?=(?:[^'"`]*['"`][^'"`]*['"`])*[^'"`]*$).*/g, '')
            .replace(/\r?\n|\r/g, '')
            .replace(/(\w+)\s*=/g, '\n$&')
            .replace(/\[\s*(\w+)\s*\]/g, '\n[$1]')
            .split('\n')
        let category = ''
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i]
            if(line.match(/\[(\w+)\]/)) {
                category = line.trim().replaceAll('[', '').replaceAll(']', '')
            } else {
                let variable = pb_extractWordBeforeEquals(line)
                let value = line.replace(/^\w+\s*=\s*/, '').trim().replace(/.*?@\/\s*/,'@/').replaceAll('@/', window.location.protocol + "//" + window.location.host + "/")
                try {
                    if(category === "informations") {
                        eval('object.' + variable + ' = ' + value)
                    } else if (category === "general") {
                        eval('object.values.' + variable + ' = ' + value)
                        eval('pixelbite.' + variable + ' = ' + value)
                    } else if (category === "components") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        if (!value.includes('http://') || !value.includes('https://')) {
                            value = value.charAt(0) + window.location.protocol + "//" + window.location.host + "/" + value.slice(1)
                        }
                        eval('pixelbite.components.' + variable + ' = ' + value)
                    } else if (category === "aliases") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        eval('pixelbite.aliases.' + variable + ' = ' + value)
                    } else if (category === "markdowns") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        eval('pixelbite.markdowns.' + variable + ' = ' + value)
                    } else if (category === "variables") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        eval('pixelbite.variables.' + variable + ' = ' + value)
                    } else if (category === "colors") {
                        eval('object.values.' + category + '.' + variable + ' = ' + value)
                        eval('pixelbite.colors.' + variable + ' = ' + value)
                    }
                 } catch (error) {
                    console.error(error)
                 }
            }
        }
        let string = 'Using '
        if (object.theme_name) string += "theme " + object.theme_name
        else string += "config theme"
        if (object.theme_version) {
            string += " "
            if (object.theme_version) string += object.theme_version
            if (object.theme_date) string += "\n- Released: " + object.theme_date
            if (object.theme_url) string += ", " + object.theme_url
        }
        if (object.author) {
            string += "\n- Author: @" + object.author
            if (object.author_url) string += ", " + object.author_url 
        }
        if(object.description) {
            string += "\n- " + object.description
        }

        let style = ""
        if (object.style) style += object.style + ";" 

        console.log(
            "%c" + string + "",
            style.replaceAll('!','&#x21;') + "font-size:12px;font-weight:bold"
        )

        if (pixelbite.debug) {
            console.log(object)
        }

        let configs = object.values.configs
        if (configs) {
            for (let i = 0; i < configs.length; i++) {
                pb_configEval(configs[i])
            }
        }
    }
    // if(text) {
    //     let lines = text.split('\n')
    //     for (let i = 0; i < lines.length; i++) {
    //         if (/^\s/.test(lines[i])) {
    //             lines[i] = 'pixelbite.' + lines[i]
    //         }
    //         try {
    //             eval('pixelbite.' + lines[i].replaceAll('<', '&lt;'))
    //         } catch (error) {
    //             console.error('PixelBite: Syntax error on line ' + i + ' (reading "' + url + '")');
    //         }
    //     }
    // }
}

const fetchFile = async (url) => {
    let res = ''
    await fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('File not found')
          }
          return response.text()
    })
    .then(text => {
        res = text
    })
    .catch(error => {
        if (url !== window.location.protocol + "//" + window.location.host + "/pixelbite.conf") {
            console.error('PixelBite: Cannot get response from "' + url + '"')
        }
    });
    return res
}

const changeTheme = async () => {
    await changeThemeMode()
}

const changeThemeMode = async () => {
    if (darkmode === '0') {
        darkmode = '1'
        pb_setCookie('darkmode', '1', 365)
    } else {
        darkmode = '0'
        pb_setCookie('darkmode', '0', 365)
    }
    pb_classGenerator()
}

const pb_checkLoaders = async () => {
    let loaders = document.getElementsByClassName('loader')
    if (loaders.length > 0) { 
        for (let i = 0; i < loaders.length; i++) {
            loaders[i].style.opacity = '0';
            await pb_sleep(400);
            loaders[i].style.display = 'none';
            loaders[i].remove()
        }
    }
}

const pb_checkLoremIpsum = () => {
    const elements = document.getElementsByTagName('*')
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.forEach((element_class) => {
            let element_class_split = element_class.split('-');
            if (element_class_split[0] === "loremIpsum") {
                for (let k = 0; k < element_class_split[1]; k++) {
                    elements[i].innerHTML += pb_randomFromArray(pb_getObjectValues(pixelbite.loremIpsum))[1] + " "
                }
                elements[i].classList.remove(element_class)
            }
        })
    }
}

const pb_sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function pb_randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < length) {
        result += pb_randomFromArray(characters);
        counter += 1;
    }
    return result;
}

const pb_randomFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

window.onload = () => {
    console.log(
        "%cThank you for using PixelbiteCSS :) (version " + pixelbite.version + ")",
        "font-size:18px;font-weight:bold"
    )
    console.log(
        "%cMore information can be found on our website or GitHub\nhttps://pixelbite-css.github.io, https://github.com/Pixelbite-CSS",
        "font-weight:bold"
    )
    pb_addSignature()
    pb_classGenerator()
}

const pb_changeRootVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

const pb_classGenerator = () => {
    debugmode()
    pb_alocatedPath()
    pb_checkLoremIpsum()
    if (pixelbite.variables.primary !== document.documentElement.style.getPropertyValue('--primary-color')) {
        pb_changeRootVariable('--primary-color', pixelbite.variables.primary)
    }
    if (pixelbite.variables.secondary !== document.documentElement.style.getPropertyValue('--secondary-color')) {
        pb_changeRootVariable('--secondary-color', pixelbite.variables.secondary)
    }
    if (pixelbite.variables.success !== document.documentElement.style.getPropertyValue('--success-color')) {
        pb_changeRootVariable('--success-color', pixelbite.variables.success)
    }
    if (pixelbite.variables.info !== document.documentElement.style.getPropertyValue('--info-color')) {
        pb_changeRootVariable('--info-color', pixelbite.variables.info)
    }
    if (pixelbite.variables.danger !== document.documentElement.style.getPropertyValue('--danger-color')) {
        pb_changeRootVariable('--danger-color', pixelbite.variables.danger)
    }
    if (pixelbite.variables.warning !== document.documentElement.style.getPropertyValue('--warning-color')) {
        pb_changeRootVariable('--warning-color', pixelbite.variables.warning)
    }
    if (pixelbite.variables.fontPrimary !== document.documentElement.style.getPropertyValue('--font-family')) {
        pb_changeRootVariable('--font-family', pixelbite.variables.fontPrimary)
    }
    if (pixelbite.variables.fontMonospace !== document.documentElement.style.getPropertyValue('--font-mono-family')) {
        pb_changeRootVariable('--font-mono-family', pixelbite.variables.fontMonospace)
    }
    const elements = document.getElementsByTagName('*')
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i]
        pb_aliasClassReplace(element)
        element.classList.forEach((element_class) => {
            for (let j = 0; j < class_library.length; j++) {
                let element_class_split = element_class.split('-');
                let splitToString = element_class_split[1] + ''
                if (splitToString.includes('_')) {
                    element_class_split[1] = splitToString.replace('_', '-')
                }
                if (darkmode === '1') {
                    if (element_class_split[0].includes('dark:')) {
                        element_class_split[0] = element_class_split[0].replace('dark:', '')
                    }
                }
                if (element_class_split[0].includes('foreach:')) {
                    element_class_split[0] = element_class_split[0].replace('foreach:', '')
                    let elementsOfElement = element.getElementsByTagName('*')
                    if (element_class_split[0] === class_library[j][0]) {
                        for (let k = 0; k < elementsOfElement.length; k++) {
                            elementsOfElement[k].style.cssText += class_library[j][1] + ':' + pb_classSplitToString(element_class_split, 1) + ';'
                        }
                    } else {
                        for (let k = 0; k < elementsOfElement.length; k++) {
                            elementsOfElement[k].classList.add(element_class)
                        }
                    }
                }
                if (element_class_split[0].includes('max') && element_class_split[0].includes(':')) {
                    let size = element_class_split[0].split(':')[0].replace('max', '').replace(':', '').replace('px', '')
                    if (size <= window.innerWidth) {
                        element_class_split[0] = element_class_split[0].split(':')[1]
                    }
                }
                if (element_class_split[0].includes('min') && element_class_split[0].includes(':')) {
                    let size = element_class_split[0].split(':')[0].replace('min', '').replace(':', '').replace('px', '')
                    if (size >= window.innerWidth) {
                        element_class_split[0] = element_class_split[0].split(':')[1]
                    }
                }
                if (element_class_split[0] === class_library[j][0]) {
                    element.style.cssText += class_library[j][1] + ':' + pb_classSplitToString(element_class_split, 1) + ';'
                }
                if(element_class_split[0] === "gradient") {
                    if (!element_class_split[3]) {
                        element_class_split[3] = 0
                    }
                    let col1 = pb_variableCheck(element_class_split[1])
                    let col2 = pb_variableCheck(element_class_split[2])
                    let deg = pb_variableCheck(element_class_split[3])
                    element.style.cssText += '' +
                    'background: ' +
                    'background: -moz-linear-gradient(' + deg + ', ' + col1 + ' 0%, ' + col2 + ' 100%);' +
                    'background: -webkit-linear-gradient(' + deg + ', ' + col1 + ' 0%, ' + col2 + ' 100%);' +
                    'background: linear-gradient(' + deg + ', ' + col1 + ' 0%, ' + col2 + ' 100%);' +
                    'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' + col1 + '",endColorstr="' + col2 + '",GradientType=1);'
                }
            }
        })
        pb_updateSearchbars()
        pb_updateDropdowns()
        pb_generateFloatInput(element)
    }
}

const pb_generateFloatInput = (element) => {
    if (element.classList.contains("floatInput")) {
        if (element.getElementsByClassName('input') && element.getElementsByClassName('label')) {
            if (element.getElementsByClassName('input') && element.getElementsByTagName('label')) {
                let inputs = element.getElementsByTagName('input')
                let input = inputs[0]
                let labels = element.getElementsByTagName('label')
                let label = labels[0]
                if (input.value) label.classList.add('inputhastext')
                else if (label.classList.contains('inputhastext')) label.classList.remove('inputhastext')
            }
        }
    }
}

const pb_aliasClassReplace = (element) => {
    let x = element.classList
    for (let i = 0; i < x.length; i++) {
        let aliasClasses = pb_getObjectValues(pixelbite.aliases)
        for (let j = 0; j < aliasClasses.length; j++) {
            if (aliasClasses[j][0] === x[i]) {
                let classSplit = aliasClasses[j][1].split(' ')
                for (let k = 0; k < classSplit.length; k++) {
                    element.classList.add(classSplit[k])
                }
            }
        }
    }
}

const pb_classSplitToString = (array, startPosition) => {
    if (array) {
        let variables = pb_getObjectValues(pixelbite.variables)
        let color_library_hsl = pb_getObjectValues(pixelbite.colors)
        let a = ""
        for (let i = startPosition; i < array.length; i++) {
            for (let j = 0; j < variables.length; j++) {
                if (variables[j][1].includes('url(')) {
                    let fontName = 'font-' + pb_randomString(32)
                    let varia = pixelbite.variables
                    pb_putCustomFontIntoCSS(fontName, variables[j][1])
                    varia[variables[j][0]] = fontName
                }
                if (array[i] === variables[j][0]) {
                    array[i] = variables[j][1]
                }
            }
            for (let j = 0; j < color_library_hsl.length; j++) {
                if (color_library_hsl[j][1].includes('#')) {
                    let hsl = pb_colorConverter(color_library_hsl[j][1])
                    color_library_hsl[j][1] = [hsl[0] * 360 + '', hsl[1] * 100 + '%']
                }
                if (array[i].includes(color_library_hsl[j][0])) {
                    let lightness = array[i].replace(color_library_hsl[j][0], "")
                    if (!lightness) lightness = 50
                    if (pb_isNumeric(lightness)) {
                        array[i] = "hsl(" + color_library_hsl[j][1][0] + "," + color_library_hsl[j][1][1] + "," + lightness + '%)'
                    }
                }
                // if (array[i].includes(color_library_hsl[j][0])) {
                //     let lightness = array[i].replace(color_library_hsl[j][0], "")
                //     if (!lightness) lightness
                //     if (pb_isNumeric(lightness))
                //     array[i] = array[i].replace(color_library_hsl[j][0], "hsl(" + color_library_hsl[j][1][0] + "," + color_library_hsl[j][1][1] + ",")
                //     array[i] += "%)"
                // }
            }
            a += array[i] + " "
        }
        return a
    } else return ""
}

const pb_variableCheck = (string) => {
    let variables = pb_getObjectValues(pixelbite.variables)
        let color_library_hsl = pb_getObjectValues(pixelbite.colors)
        for (let j = 0; j < variables.length; j++) {
            if (variables[j][1].includes('url(')) {
                let fontName = 'font-' + pb_randomString(32)
                let varia = pixelbite.variables
                pb_putCustomFontIntoCSS(fontName, variables[j][1])
                varia[variables[j][0]] = fontName
            }
            if (string === variables[j][0]) {
                string = variables[j][1]
            }
        }
        for (let j = 0; j < color_library_hsl.length; j++) {
            if (color_library_hsl[j][1].includes('#')) {
                let hsl = pb_colorConverter(color_library_hsl[j][1])
                color_library_hsl[j][1] = [hsl[0] * 360 + '', hsl[1] * 100 + '%']
            }
            if (string.includes(color_library_hsl[j][0])) {
                let lightness = string.replace(color_library_hsl[j][0], "")
                if (!lightness) lightness = 50
                if (pb_isNumeric(lightness)) {
                    string = "hsl(" + color_library_hsl[j][1][0] + "," + color_library_hsl[j][1][1] + "," + lightness + '%)'
                }
            }
        }
        return string
}

const pb_isNumeric = (str) => {
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
}

const pb_colorConverter = (color) => {
    let r = parseInt(color.substr(1, 2), 16); // Grab the hex representation of red (chars 1-2) and convert to decimal (base 10).
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [h, s, l];
}

const pb_addSignature = () => {
    const comment = document.createComment("This site is created via PixelbiteCSS (https://github.com/Pixelbite-CSS)");
    document.body.appendChild(comment);
}

const pb_addFontAwesome = () => {
    const script = document.createElement('script')
    script.setAttribute('src', pixelbite.fontawesome)
    script.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(script)
}

const debugmode = () => {
    if (pixelbite.debug) {
        let elements = document.getElementsByTagName('*')
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('contenteditable', 'true')
        }
    }
}

const href = (location, newWindow) => {
    if (newWindow) newWindow = '_blank'
    else newWindow = '_self'
    window.open(location, newWindow)
}

const toggleElement = (element_class) => {
    const elements = document.getElementsByClassName(element_class)
    for (let i = 0; i < elements.length; i++) {
        // if (elements[i].classList.contains('hidden')) {
        //     elements[i].style.position = 'absolute'
        //     elements[i].classList.remove('hidden')
        // }
        // if (elements[i].style.position !== 'absolute') {
        //     elements[i].style.position = 'absolute'
        //     elements[i].style.top = '-999999999px'
        // } else {
        //     elements[i].style.position = 'relative'
        //     elements[i].style.top = '0px'
        // }
        if (elements[i].classList.contains('hidden')) {
            elements[i].style.display = 'none'
            elements[i].classList.remove('hidden')
        }
        if (elements[i].style.display !== 'none') {
            elements[i].style.display = 'none'
        } else {
            elements[i].style.display = 'flex'
        }
    }
}

const pb_changeVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

let pb_beforeSlideshows = []

const pb_slideshowGenerator = async () => {
    let slideshows = document.getElementsByClassName('slideshow')
    if (slideshows !== pb_beforeSlideshows) {
        if (slideshows.length > 0) {
            for (let i = 0; i < slideshows.length; i++) {
                if (!pb_beforeSlideshows.includes(slideshows[i])) {
                    let slideshow = slideshows[i]
                    let slides = slideshow.getElementsByClassName('slide')
                    pb_slideshowSlide(0, slideshow, slides)
                }
            }
            pb_beforeSlideshows = slideshows
        }
    }
    await pb_sleep(1000)
    await pb_slideshowGenerator()
}

const pb_slideshowSlide = async (index, slideshow, slides) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = ((-i + index) * 100) + "%"
    }
    if (index >= slides.length - 1) index = -1
    await pb_sleep(5000)
    await pb_slideshowSlide(index + 1, slideshow, slides)
}

const pb_setCookie = (name, value, days_to_expiration) => {
    const d = new Date()
    d.setTime(d.getTime() + (days_to_expiration * 24 * 60 * 60 * 1000))
    let expires = "expires=" + d.toUTCString()
    document.cookie = name + "=" + value + ";" + expires + ";path=/"
}

const pb_getCookie = (name) => {
    let n = name + "="
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(n) === 0) return c.substring(n.length, c.length)
    }
    return ""
}

let pb_searchbarsBefore = []

const pb_updateSearchbars = () => {
    if (pb_searchbarsBefore.length !== document.getElementsByClassName('searchbar').length) {
        let searchbars = document.getElementsByClassName('searchbar')
        for (let i = 0; i < searchbars.length; i++) {
            let search = searchbars[i].getElementsByClassName('search')[0]
            let searchValues = searchbars[i].getElementsByClassName('search-values')[0].getElementsByTagName('div')
            for (let j = 0; j < searchValues.length; j++) {
                searchValues[j].style.display = 'none'

            }
            search.oninput = () => {
                let searchValue = search.value.toLowerCase();
                let searchValues = searchbars[i].getElementsByClassName('search-values')[0].getElementsByTagName('div')
                for (let j = 0; j < searchValues.length; j++) {
                    if (searchValues[j].innerText.toLowerCase().includes(searchValue) && searchValue) {
                        searchValues[j].style.display = 'flex'
                    } else {
                        searchValues[j].style.display = 'none'
                    }
                }
            }
        }
        pb_searchbarsBefore = searchbars
    }
}

let pb_dropdownsBefore = []

const pb_updateDropdowns = () => {
    let dropdowns = document.getElementsByClassName("dropdown");
    if(pb_dropdownsBefore.length !== dropdowns.length) {
        for (let i = 0; i < dropdowns.length; i++) {
            let divs = document.getElementsByTagName('div')
            let buttons = document.getElementsByTagName('button')
            for(let j = 0; j < divs.length; j++) {
                divs[j].remove
            }
            for(let j = 0; j < buttons.length; j++) {
                buttons[j].remove
            }
            let selects = dropdowns[i].getElementsByTagName('select')
            for(let j = 0; j < selects.length; j++) {
                selects[j].style.display = "none";
            }
            let options = dropdowns[i].getElementsByTagName('select')[0].getElementsByTagName('option')
            let selectButton = document.createElement("button")
            let dropdownClassname = "toggle-" + pb_randomString(32)
            selectButton.onclick = () => toggleElement(dropdownClassname)
            selectButton.innerHTML = "<div class='flexRow flexSpaceBetween g-15px w-100%'><div>" + options[0].innerHTML + "</div><i class='fa-solid fa-caret-down'></i></div>"
            dropdowns[i].append(selectButton)
            dropdowns[i].value = options[0].value;
            let selectMenu = document.createElement("div")
            selectMenu.classList.add("hidden")
            selectMenu.classList.add(dropdownClassname)
            for(let k = 0; k < options.length; k++) {
                let option = document.createElement("div")
                option.value = options[k].value
                option.innerHTML = options[k].innerHTML
                option.onclick = () => {
                    dropdowns[i].value = options[k].value
                    dropdowns[i].getElementsByTagName('button')[0].innerHTML = "<div class='flexRow flexSpaceBetween g-15px w-100%'><div>" + options[k].innerHTML + "</div><i class='fa-solid fa-caret-down'></i></div>"
                    pb_classGenerator()
                    toggleElement(dropdownClassname)
                }
                selectMenu.append(option)
            }
            dropdowns[i].append(selectMenu)
        }
        pb_dropdownsBefore = dropdowns
    }
}
  
window.addEventListener('resize', pb_classGenerator); 
const domains = []

function link(domain, ip) {
    const splited = domain.split('.')

    buildTree(domains, splited, ip)

    function buildTree(tree, splited, ip) {
        if (!tree.includes(d => d.name == splited[splited.length - 1])) {
            tree.push({ name: splited[splited.length - 1] })
        }

        const reference = tree.find(d => d.name == splited[splited.length - 1])

        if (splited.length > 1) {
            splited.pop()
            if (reference.domains == undefined) {
                reference.domains = []
            }

            buildTree(reference.domains, splited, ip)
        } else {
            reference.ip = ip
            return
        }
    }
}



function resolve(name) {
    const splited = name.split('.')
    return searchInTree(domains, splited)

    function searchInTree(tree, splited) {
        if (splited.length > 1) {
            const reference = tree.find(d => d.name == splited[splited.length - 1])
            if (reference.domains != undefined) {
                    splited.pop()
            return searchInTree(reference.domains, splited)
            }
        }
        else {
            return tree.find(d => d.name == splited[splited.length - 1]).ip
        }
    }
}

link('google.com', '172.0.0.1')
link('mail.google.com', '172.0.0.2')
link('chat.google.com', '172.0.0.3')

console.log(resolve('google.com'))
console.log(resolve('mail.google.com'))
console.log(resolve('chat.google.com'))


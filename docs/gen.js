import fs from 'fs'
import path from 'path'

let out = ''

const run = async e => {
	const dir = await fs.readdirSync( '../system' )

	for (let i = 0; i < dir.length; i++ ) {
		let name = dir[i]
		let script = path.join( '../system', name )
		if (await fs.existsSync( script ) ) {
			const key = '# summary: '
			let text = await (await fs.readFileSync( script )).toString()
			text = (text.split('\n').find( l => l.indexOf(key) != -1 ) || '').replaceAll(key,'')
			for (let i = 0; i < 4; i++) text = text.replaceAll(`\$${i}`, `\`\$${i}\``)
			out += `
* [*${name.substring(0, name.indexOf('.'))}*](https://github.com/RegieKI/pdac/blob/stable/system/${name}) - ${text}`
		}
	}

	await fs.writeFileSync( '../SYS.md', out )
}
 
run() 
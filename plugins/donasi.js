let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel: [0853-4082-7717]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6282291992581
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler

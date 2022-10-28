function handler(m) {
  
  const kontak = {
	"displayName": 'My Owner Sanwal',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('966594204996@s.whatsapp.net')}\nitem1.TEL;waid=966594204996:966594204996\nitem1.X-ABLabel:save-me.\nURL;My Web: https://github.com/umar404/ud-md\nEMAIL;Email Owner:umardevil48@gamil.com\nORG: NOT A BOT +SAVE ME\nTEL;My number ;waid=923165123719:923165123719\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler

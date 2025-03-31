module.exports = {
    command: ['lyrics', 'lyric', 'ly'],
    desc: 'Random Lyrics',
    category: ['music'],
    async run(m, { Gifted, fetchJson }) {
        Gifted.reply({ text: giftechMess.wait }, m)
	    const giftedRes = await fetchJson('https://apis.davidcyriltech.my.id/lyrics?t=')
	    let giftedButtons = [
            [
                { text: '🔁', feature: 'waifu' },
            ]
        ]
        await Gifted.reply({ image: giftedRes.url, caption: `Random Waifu` }, giftedButtons, m)
    },
};

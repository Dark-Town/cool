module.exports = {
    command: ['sportify', 'sport', 'sp'],
    desc: 'Random Music',
    category: ['music'],
    async run(m, { Gifted, fetchJson }) {
        Gifted.reply({ text: giftechMess.wait }, m)
	    const giftedRes = await fetchJson('https://apis.davidcyriltech.my.id/search/spotify?text=')
	    let giftedButtons = [
            [
                { text: '🔁', feature: 'waifu' },
            ]
        ]
        await Gifted.reply({ image: giftedRes.url, caption: `Random Waifu` }, giftedButtons, m)
    },
};￼Enter

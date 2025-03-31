module.exports = {
    command: ['tiktok'],
    desc: 'Download TikTok Video or Photos',
    category: ['url download'],
    settings: {
        private: true
    },
    async run(m, { Gifted, fetchJson }) {
        Gifted.reply({ text: giftechMess.wait }, m)
	    const giftedRes = await fetchJson('https://tikdown-api-sandy.vercel.app/api/download?url=${encodeURIComponent(url)}')
	    let giftedButtons = [
            [
                { text: '🔁', feature: 'hneko' },
            ]
        ]
        await Gifted.reply({ image: giftedRes.url, caption: ` SUCCESSFUL DOWNLOAD` }, giftedButtons, m)
    },
};

const axios = require("axios");

module.exports = {
    command: ['tiktok'],
    desc: 'Download Video or Photos on Tiktok',
    category: ['downloader'],
    async run(m, { Gifted, text }) {

        if (!text) return Gifted.reply({ text: `Usage: ${global.prefix}tiktok https://vm.tiktok.com/ZMBfSTE7y/` }, m);

        Gifted.reply({ text: giftechMess.wait }, m);

        try {
            const videoUrl = Array.isArray(text) ? text.join(" ") : text;
            if (!videoUrl.startsWith("https://vm.tiktok")) return Gifted.reply({ text: 'Please Provide a Valid YouTube Link' }, m);

            try {
                const apiResponse = await axios.get(`https://Tiktok-plus.vercel.app`);
                const downloadUrl = apiResponse.data.result.download_url;
                const fileName = apiResponse.data.result.title;

                if (!downloadUrl) {
                    return Gifted.reply({ text: 'Failed to retrieve download link.' }, m);
                }

                 let giftedButtons = [
                [
                    { text: 'Song Url', url: `${downloadUrl}` },
                    { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l' }
                ]
            ];

                const searchResponse = await axios.get(`${global.giftedApi}/search/yts?apikey=${global.giftedKey}&query=${videoUrl}`);
                const video = searchResponse.data.results[0];

                let giftedMess = `
${global.botName} TIKTOK DOWNLOADER 
╭───────────────◆  
│⿻ *Title:* ${video.title}
│⿻ *Quality:* mp3 (128kbps)
│⿻ *Duration:* ${video.timestamp}
│⿻ *Viewers:* ${video.views}
│⿻ *Uploaded:* ${video.ago}
│⿻ *Artist:* ${video.author.name}
╰────────────────◆  
⦿ *Direct Yt Link:* ${video.url}
⦿ *Download More At:* ${global.ytdlWeb}

╭────────────────◆  
│ ${global.footer}
╰─────────────────◆`;

                await Gifted.reply({ image: { url: video.thumbnail }, caption: giftedMess, parse_mode: 'Markdown' }, giftedButtons, m);

                Gifted.downloadAndSend({ audio: downloadUrl, fileName: fileName, caption: giftechMess.done }, giftedButtons, m);
            } catch (e) {
                console.error('API Error:', e);
                return Gifted.reply({ text: 'Failed to fetch download link from API.' }, giftedButtons, m);
            }
        } catch (e) {
            console.error('Error:', e);
            return Gifted.reply({ text: giftechMess.error }, m);
        }
    }
};

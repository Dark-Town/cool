let Giftedd = async (m, { Gifted, text, fetchJson }) => {
    if (!text) {
        Gifted.reply({ text: `Provide Some Text ie ${global.prefix}ai I Need Assistance.` }, m);
        return;
    }

    Gifted.reply({ text: giftechMess.wait }, m);

    let giftedButtons = [
        [
            { text: 'Ai Web', url: 'https://ab-text-voice.abrahamdw882.workers.dev/api/tts?model=tts-english3&text=Hi%20there!%20It%27s%20nice%20to%20meet%20you.%20How%20are%20you%20doing%20today%3F%20Is%20there%20something%20on%20your%20mind%20that%20you%27d%20like%20to%20talk%20about%20or%20ask%20me%3F%20I%27m%20here%20to%20help!%20%F0%9F%98%8A' },
            { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l' }
        ]
    ];

    try {
        const aiResponse = await fetchJson(`https://ab-text-voice.abrahamdw882.workers.dev/api/tts?model=tts-english3&text=Hi%20there!%20It%27s%20nice%20to%20meet%20you.%20How%20are%20you%20doing%20today%3F%20Is%20there%20something%20on%20your%20mind%20that%20you%27d%20like%20to%20talk%20about%20or%20ask%20me%3F%20I%27m%20here%20to%20help!%20%F0%9F%98%8A`);
        const giftedResponse = aiResponse.result;

        Gifted.reply( { text: giftedResponse}, giftedButtons, m);
    } catch (error) {
        console.error('Error occurred while fetching AI data:', error);
        Gifted.reply( { text: 'Chat Gpt is Unavailable Right Now.'}, giftedButtons, m);
    }
};

Giftedd.command = ['gpt', 'ai', 'chatgpt'];
Giftedd.desc = 'Chat Gpt Ai Chat';
Giftedd.category = ['ai'];

module.exports = Giftedd;

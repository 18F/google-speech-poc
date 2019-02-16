const speech = require('@google-cloud/speech').v1p1beta1;
const fs = require('fs');

async function main(fileName) {
  const client = new speech.SpeechClient({
    keyFilename: './credentials.json'
  });

  const audioBytes = fs.readFileSync(fileName).toString('base64');

  const audio = {
    content: audioBytes
  };

  const config = {
    encoding: 'FLAC',
    sampleRateHertz: 48000,
    languageCode: 'en-US',
    enableWordTimeOffsets: false,
    enableAutomaticPunctuation: true,
    model: 'video',
    audioChannelCount: 2
  };

  const request = {
    audio,
    config
  };

  const [response] = await client.recognize(request);
  const { results } = response;
  const transcription = results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);
}

const fileName = process.argv[2];

main(fileName).catch(console.error);

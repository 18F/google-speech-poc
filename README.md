# Google Speech PoC

A proof of concept for using the Google Speech to Text api to generate transcriptions.

## Requirements
- Node/npm
- Credentials for a GCP service account in json

## Getting Started
- `git clone git@github.com:18F/google-speech-poc.git`
- `cd google-speech-poc`
- `npm install`
- place your GCP service account credentials in a file in the project root named `credentials.json`
- `npm start -- ./examples/test.flac`

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain
This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

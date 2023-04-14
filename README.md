# RobinGPT
A Visual Studio Code extension allows you to quickly generate natural language text using the unofficial ChatGPT web wrapper.

## Getting Started

Please make sure that you have latest python and nodejs lts version.

### Server

1. Clone this repo.
2. Open the `server/` folder.
3. Run `make install` to install deps.
4. Open the `server/app.py` file, edit both `session_token` and `conversation_id`, and save it.
5. Run `make` or `python -m flask run` to start the server.

### VSCode Extension

1. Download the latest release from [https://github.com/madebyais/RobinGPT/releases](https://github.com/madebyais/RobinGPT/releases)
2. Open VSCode and install the extension

### How to use it

1. Create your prompt
2. Block the prompt text
3. Press the `ctrl+alt+g`
4. Wait, wait, and DONE!